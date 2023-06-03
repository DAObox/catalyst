/* eslint-disable react/no-unescaped-entities */
import { truncate, truncateAddress } from "@/lib/functions";
import Image from "next/image";

export default function MemberCardGrid() {
    return(
        <div className="w-[300px] sm:w-[285px] md:w-[325px] lg:w-[363px] relative">
            <div className="w-full relative h-fit">
                <div className="relative w-full h-24 rounded-t-2xl">
                    <Image src={"/cover.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-t-3xl" />
                </div>
                <div className="w-full -mt-24">
                    <div className="w-full bg-gray rounded-3xl h-full relative">
                        <div className="absolute -top-6 w-14 h-14 left-3.5 rounded-full border-[4px] border-gray">
                            <Image src={"/avatar.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-full" />
                        </div>
                        <div className="relative mt-12 p-5 space-y-[16px]">
                            <div>
                                <h2 className="text-xl text-lighter-gray mt-5">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</h2>
                            </div>
                            <div>
                                <p className="tex-medium-gray">{truncate("Embrace the revolution, join me on this transformative journey!", 100)}</p>
                            </div>
                            <div className="bg-medium-gray w-full h-[1px]" />
                            <div className="flex items-center space-x-5">
                                <div className="flex items-center space-x-1">
                                    <div>
                                        <Image src={"/coins.png"} width={15} height={15} alt="icon" />
                                    </div>
                                    <div>
                                        <p className="text-lighter-gray text-sm">230 <span className="text-medium-gray">Token Balance</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                    <div>
                                        <Image src={"/voting.png"} width={15} height={15} alt="icon" />
                                    </div>
                                    <div>
                                        <p className="text-lighter-gray text-sm">230 <span className="text-medium-gray">Voting Power</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}