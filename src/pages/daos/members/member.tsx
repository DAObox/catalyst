import DaoAppShell from "@/components/dao/DaoAppShell";
import MemberStat from "@/components/dao/members/MemberStat";
import { truncate, truncateAddress } from "@/lib/functions";
import Image from "next/legacy/image";

export default function Member() {
    return (
        <DaoAppShell currentPage="members">
            <div className="w-full relative">
                <div className="w-full relative h-fit">
                    <div className="relative w-full h-36 rounded-t-2xl">
                        <Image src={"/cover.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-t-3xl" />
                    </div>
                    <div className="w-full -mt-12">
                        <div className="w-full bg-gray rounded-3xl h-full relative">
                            <div className="absolute -top-14 w-28 h-28 left-6 rounded-full border-[4px] border-gray">
                                <Image src={"/avatar.png"} layout="fill" objectFit="cover" alt="icon" className="rounded-full" />
                            </div>
                            <div className="relative py-12 px-8 space-y-[16px]">
                                <div className="flex space-x-1.5 items-center mt-6">
                                    <h2 className="text-xl text-lighter-gray">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</h2>
                                    <h3 className="text-ash text-lg">@israelrex.lens</h3>
                                </div>
                                <div>
                                    <p className="tex-medium-gray">{truncate("Embrace the revolution, join me on this transformative journey!", 100)}</p>
                                </div>
                                <div className="bg-medium-gray w-full h-[1px]" />
                                <div>
                                    <MemberStat balance="230" power="230" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DaoAppShell>
    )
}