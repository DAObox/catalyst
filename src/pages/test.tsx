/* eslint-disable @typescript-eslint/no-unsafe-return */
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import { useFetchDaos } from "@/hooks/useFetchDaos";
import { Button } from "@material-tailwind/react";
import { useNewDao } from "@/hooks/useNewDao";
import { encodeLensVotingPlugin } from "@/lib/encoders/EncodeLensVotingPlugin";

const votingToken = "0xD3596C81FcAb699192dc79C8e25f1362E3dFf89A";

const Test: NextPage = () => {
  useFetchDaos({ limit: 3 });

  const name = `test-${Math.floor(Math.random() * 1000)}`;

  const { mutate, creationStatus, data, error } = useNewDao({
    daoMetadata: {
      name,
      description: "some description",
      links: [],
    },
    ensSubdomain: name,
    plugins: [
      encodeLensVotingPlugin({
        lensFollowNFT: votingToken,
        network: "polygon",
      }),
    ],
  });

  return (
    <div className="h-full w-full overflow-x-clip overflow-y-scroll bg-gradient-to-r from-[#1E203C] to-[#11121B]">
      <main className="relative flex h-full min-h-screen w-full justify-center">
        <div className="relative w-full max-w-xs px-2.5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
          <Navbar />
          <div className="absolute top-32 w-full space-y-10">
            <div>
              <Button
                variant="outlined"
                onClick={() => mutate?.()}
                disabled={["pinningMetadata", "creatingDao"].includes(
                  creationStatus
                )}
              >
                Deploy DAO
              </Button>
            </div>
            <h3>Status: {creationStatus}</h3>
            <h3>
              data:
              <pre>
                {JSON.stringify(
                  data,
                  (_, v) => (typeof v === "bigint" ? v.toString() : v),
                  2
                )}
              </pre>
            </h3>
            {data && (
              <a
                href={`https://app.aragon.org/#/daos/goerli/${
                  data.daoAddress as string
                }/dashboard`}
              >
                Goto Dao
              </a>
            )}
            {error && <h3>Error: {error?.message}</h3>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
