import { createContext, useContext, useEffect, useState } from "react";
import {
  Client,
  Context,
  TokenVotingClient,
  type ContextParams,
} from "@aragon/sdk-client";
import { type Signer } from "ethers";
import { useNetwork } from "wagmi";

import useWindowSigner from "@/hooks/useWindowSigner";

export interface AragonSDKContextValue {
  context?: Context;
  baseClient?: Client;
  tokenVotingClient?: TokenVotingClient;
}

const AragonSDKContext = createContext<AragonSDKContextValue>({});

export function AragonProvider({ children }: { children: React.ReactNode }) {
  const { signer: walletClient } = useWindowSigner();
  const { chain } = useNetwork();
  const [context, setContext] = useState<Context | undefined>(undefined);
  const [baseClient, setBaseClient] = useState<Client | undefined>(undefined);
  const [tokenVotingClient, setTokenVotingClient] = useState<
    TokenVotingClient | undefined
  >(undefined);

  useEffect(() => {
    if (!walletClient || !chain) return;

    const contextParams: ContextParams = {
      network: chain.id,
      signer: walletClient as unknown as Signer,
      ipfsNodes: [
        {
          url: "https://testing-ipfs-0.aragon.network/api/v0",
          headers: {
            "X-API-KEY": "b477RhECf8s8sdM7XrkLBs2wHc4kCMwpbcFC55Kt",
          },
        },
      ],
      ...(chain.id === 137 ? polygonParams : mumbaiParams),
    };
    const context: Context = new Context(contextParams);
    const client: Client = new Client(context);
    const tokenVotingClient = new TokenVotingClient(context);

    setBaseClient(client);
    setTokenVotingClient(tokenVotingClient);
    setContext(context);
  }, [walletClient, chain]);

  return (
    <AragonSDKContext.Provider
      value={{
        context,
        baseClient,
        tokenVotingClient,
      }}
    >
      {children}
    </AragonSDKContext.Provider>
  );
}

export function useAragon(): AragonSDKContextValue {
  const context = useContext(AragonSDKContext);
  if (!context)
    throw new Error("useAragon hooks must be used within an AragonSDKWrapper");
  return context;
}

const mumbaiParams = {
  daoFactoryAddress: "0x5bDBaAfd90B908058567080513635f560F896918",
  ensRegistryAddress: "0xD24A78824dF3C29CA03661368e6437b767A5422D",
  web3Providers: ["https://rpc.ankr.com/polygon_mumbai"],
  graphqlNodes: [
    {
      url: "https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-mumbai/version/v1.1.1/api",
    },
  ],
};

const polygonParams = {
  daoFactoryAddress: "0x51Ead12DEcD31ea75e1046EdFAda14dd639789b8",
  ensRegistryAddress: "0x57bf333951967a0cC0afcD58FC7959Ca0Eae6905",
  web3Providers: ["https://rpc.ankr.com/polygon"],
  graphqlNodes: [
    {
      url: "https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-polygon/version/v1.1.1/api",
    },
  ],
};
