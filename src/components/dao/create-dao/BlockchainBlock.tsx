/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { selectedBlockchainName } from "atoms/atoms";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { type BlockchainBlockProps } from "typings/typings";

export default function BlockchainBlock({ name, icon }: BlockchainBlockProps) {
  const [selectedBlockchain, setSelectedBlockchain] = useRecoilState(selectedBlockchainName);
  return (
    <button
      className={`flex min-h-[150px] w-[150px] flex-col items-center justify-center rounded-lg 
        border border-gray-border bg-gray focus:border-green sm:min-h-[200px] sm:w-[200px] ${
          selectedBlockchain == name && "border-green"
        }`}
      onClick={() => setSelectedBlockchain(name)}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <Image src={icon} width={40} height={40} alt="icon" />
        </div>
        <p className="text-xl font-medium text-lighter-gray">{name}</p>
      </div>
    </button>
  );
}
