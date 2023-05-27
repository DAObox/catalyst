import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygon],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID || "" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Catalyst',
  projectId: 'CATALYST',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
