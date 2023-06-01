/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil"
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'CATALYST'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const MyApp: AppType = ({ Component, pageProps }: AppType) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true);
  }, []);
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RecoilRoot>
          {mounted && <Component {...pageProps} />}
        </RecoilRoot>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeVariables={{ 
        '--w3m-accent-color': '#1E293B',
        '--w3m-background-color': '#101725'
      }} />
    </>
  );
};

export default MyApp;
