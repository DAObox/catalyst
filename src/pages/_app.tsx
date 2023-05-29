import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { arbitrum, polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil"

const { chains, publicClient } = configureChains(
  [polygon, mainnet, arbitrum],
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true);
  }, []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <RecoilRoot>
          {mounted && <Component {...pageProps} />}
        </RecoilRoot>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
