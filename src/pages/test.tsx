import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import { useFetchDaos } from "@/hooks/useFetchDaos";
import { Button } from "@material-tailwind/react";

const Test: NextPage = () => {
  const { data: daos } = useFetchDaos({ limit: 3 });

  console.log(daos);
  return (
    <div className="h-full w-full overflow-x-clip overflow-y-scroll bg-gradient-to-r from-[#1E203C] to-[#11121B]">
      <main className="relative flex h-full min-h-screen w-full justify-center">
        <div className="relative w-full max-w-xs px-2.5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
          <Navbar />
          <div className="absolute top-32 w-full space-y-10">
            <div>
              <Button variant="outlined">Deploy DAO</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
