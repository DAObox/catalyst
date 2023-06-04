import ActiveBadge from "@/components/buttons/ActiveBadge";
import CopyButton from "@/components/buttons/CopyButton";
import DaoAppShell from "@/components/dao/DaoAppShell";
import Dot from "@/components/dao/members/detail/activity/Dot";
import { truncateAddress } from "@/lib/functions";
import Link from "next/link";

export default function Governance() {
    return (
        <DaoAppShell currentPage="governance">
            <div className="w-full p-10 rounded-xl bg-gray border border-gray-border space-y-5">
                <div className="flex w-full justify-between">
                    <div className="space-y-2">
                        <div>
                            <div>
                                <h3 className="text-xl font-bold text-lighter-gray">Campaign</h3>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div>
                                <Link href={"https://daobox.com/campaign"} target="_blank" className="text-green">
                                    https://daobox.com/campaign
                                </Link>
                            </div>
                            <CopyButton data={"https://daobox.com/campaign"} />
                        </div>
                    </div>
                    <div>
                        <ActiveBadge />
                    </div>
                </div>
                <div className="w-full bg-medium-gray h-[1px]" />
                <div className="w-full flex items-center rounded-lg space-x-2.5">
                    <p className="text-light-gray text-base">Published by: <span className="text-green">{truncateAddress("0x4b75F7F56d10D898822A4F2B99b08EF40e5BF7C8")}</span></p>
                    <Dot />
                    <p className="text-light-gray text-base">June 3rd, 2023</p>
                </div>
            </div>
        </DaoAppShell>
    )
}