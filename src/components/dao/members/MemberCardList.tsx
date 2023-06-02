import { truncateAddress } from "@/lib/functions"
import Image from "next/legacy/image"

export default function MemberCardList() {
    return (
        <div className="bg-gray w-full py-2.5 px-4 rounded-xl">
            <div className="flex items-center justify-between space-x-3.5">
                <div className="flex items-center space-x-4">
                    <div>
                        <div className="relative w-14 h-14">
                            <Image src={"/avatar.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-full" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-lighter-gray">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</h2>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-1.5">
                            <div>
                                <Image src={"/coins.png"} width={15} height={15} alt="icon" />
                            </div>
                            <div>
                                <p className="text-lighter-gray">230 <span className="text-medium-gray">Token Balance</span></p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <div>
                                <Image src={"/voting.png"} width={15} height={15} alt="icon" />
                            </div>
                            <div>
                                <p className="text-lighter-gray">230 <span className="text-medium-gray">Voting Power</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}