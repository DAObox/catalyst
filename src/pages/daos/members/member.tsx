import DelegateButton from "@/components/buttons/DelegateButton";
import FollowButton from "@/components/buttons/FollowButton";
import DaoAppShell from "@/components/dao/DaoAppShell";
import MemberStat from "@/components/dao/members/MemberStat";
import MemberDetailsTab from "@/components/dao/members/detail/MemberDetailsTab";
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
                            <div className="mt-10 absolute right-8 -top-5">
                                <MemberStat balance="230" power="230" />
                            </div>
                            <div className="relative py-12 px-8 space-y-[16px]">
                                <div className="flex space-x-1.5 items-center mt-6">
                                    <h2 className="text-xl text-lighter-gray">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</h2>
                                    <h3 className="text-ash text-lg">@israelrex.lens</h3>
                                </div>
                                <div className="w-full flex space-x-10">
                                    <div className="flex-1 space-y-4">
                                        <p className="tex-medium-gray">{truncate("Crafting decentralized experiences, bridging creativity with technology. Designing the future of web3, where user empowerment and blockchain innovation merge seamlessly. Embrace the revolution, join me on this transformative journey!", 250)}</p>
                                        <div className="flex items-center space-x-2">
                                            <div className="text-xs text-light-black">Mutual Communities</div>
                                            <div className="flex -space-x-2 items-center mt-1.5">
                                                <div>
                                                    <Image src={"/logos/aragon.png"} width={32} height={32} alt="aragon icon" />
                                                </div>
                                                <div>
                                                    <Image src={"/logos/aragon.png"} width={32} height={32} alt="aragon icon" />
                                                </div>
                                                <div>
                                                    <Image src={"/logos/aragon.png"} width={32} height={32} alt="aragon icon" />
                                                </div>
                                                <div>
                                                    <Image src={"/logos/aragon.png"} width={32} height={32} alt="aragon icon" />
                                                </div>
                                                <div>
                                                    <Image src={"/logos/aragon.png"} width={32} height={32} alt="aragon icon" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-green font-medium">+4 more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-sm w-full">
                                        <div className="w-full space-y-4">
                                            <FollowButton />
                                            <DelegateButton />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <MemberDetailsTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DaoAppShell>
    )
}