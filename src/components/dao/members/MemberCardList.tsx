import { truncateAddress } from "@/lib/functions"
import Image from "next/legacy/image"
import Link from "next/link"
import MemberStat from "./MemberStat"

export default function MemberCardList() {
    return (
        <Link href={"/daos/members/member"}>
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
                        <MemberStat balance="230" power="230" />
                    </div>
                </div>
            </div>
        </Link>
    )
}