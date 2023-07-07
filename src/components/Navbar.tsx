import Image from "next/image";
import daoboxLogo from "../../public/logos/daobox.png";
import { Web3Button } from "@web3modal/react";

export default function Navbar() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 mt-8 flex w-full justify-center">
        <div className="w-full">
          <div className="flex h-fit w-full items-center justify-between">
            <div className="w-40">
              <Image src={daoboxLogo} alt="logo" width={182} height={44} />
            </div>
            <div>
              <Web3Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
