/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { selectedBlockchainName } from "atoms/atoms";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { type BlockchainBlockProps } from "typings/typings";

export default function BlockchainBlock({ name, icon }: BlockchainBlockProps) {
    const [selectedBlockchain, setSelectedBlockchain] = useRecoilState(selectedBlockchainName)
    return(
        <button className={`w-[150px] sm:w-[200px] min-h-[150px] sm:min-h-[200px] bg-gray border border-gray-border 
        rounded-lg flex flex-col items-center justify-center focus:border-green ${selectedBlockchain == name && "border-green"}`} onClick={
            () => setSelectedBlockchain(name)
        }>
            <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                    <Image src={"/logos/ethereum.png"} width={40} height={40} alt="icon" />
                </div>
                <p className="font-medium text-lighter-gray text-xl">{name}</p>
            </div>
        </button>
    )
}