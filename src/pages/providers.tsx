import * as React from "react";
import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";

import { chains, config, walletConnectProjectId } from "@/lib/wagmi";

import { RecoilRoot } from "recoil";
import { AragonProvider } from "@/contexts/AragonContext";

const ethereumClient = new EthereumClient(config, chains);

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={config}>
      <AragonProvider>
        <RecoilRoot>{mounted && children}</RecoilRoot>
        <Web3Modal
          projectId={walletConnectProjectId}
          ethereumClient={ethereumClient}
          themeVariables={{
            "--w3m-accent-color": "#1E293B",
            "--w3m-background-color": "#101725",
          }}
        />
      </AragonProvider>
    </WagmiConfig>
  );
}
