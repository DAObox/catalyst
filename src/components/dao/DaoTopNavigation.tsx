/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "../buttons/CustomConenctButton";
import Link from "next/link";
import { type DaoTopNavigationProps } from "typings/typings";

export default function DaoTopNavigation({ active }: DaoTopNavigationProps) {
    const { openConnectModal } = useConnectModal();
    return (
        <div className="flex items-center justify-between text-white">
            <div className="flex-1 flex justify-between">
                <div className={`flex space-x-5 flex-1 justify-center ${!openConnectModal && "ml-40"}`}>
                    <Link href={"/daos/dao"} className={`hover:text-green ${active === "" && "text-green"}`}>
                        Dashboard
                    </Link>
                    <Link href={"?page=governance"} className={`hover:text-green ${active === "governance" && "text-green"}`}>
                        Governance
                    </Link>
                    <Link href={"?page=treasury"} className={`hover:text-green ${active === "treasury" && "text-green"}`}>
                        Treasury
                    </Link>
                    <Link href={"?page=members"} className={`hover:text-green ${active === "members" && "text-green"}`}>
                        Members
                    </Link>
                    <Link href={"?page=settings"} className={`hover:text-green ${active === "settings" && "text-green"}`}>
                        Settings
                    </Link>
                </div>                
            </div>
            <div className="flex justify-end z-20">
                {
                    openConnectModal ? <CustomConnectButton /> : <ConnectButton />
                }
            </div>
        </div>
    )
}