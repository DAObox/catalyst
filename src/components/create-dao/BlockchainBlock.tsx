import Image from "next/legacy/image";

export default function BlockchainBlock() {
    return(
        <button className="w-[150px] sm:w-[200px] min-h-[150px] sm:min-h-[200px] bg-gray border border-gray-border 
        rounded-lg flex flex-col items-center justify-center focus:border-green">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                    <Image src={"/logos/ethereum.png"} width={40} height={40} alt="icon" />
                </div>
                <p className="font-medium text-lighter-gray text-xl">Ethereum</p>
            </div>
        </button>
    )
}