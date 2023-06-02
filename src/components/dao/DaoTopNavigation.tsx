/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from "next/link";
import { type DaoTopNavigationProps } from "typings/typings";
import { Web3Button, useWeb3Modal } from "@web3modal/react";

export default function DaoTopNavigation({ active }: DaoTopNavigationProps) {
    const { isOpen } = useWeb3Modal();
    return (
        <div className="flex items-center justify-between text-white">
            <div className="flex-1 flex justify-between">
                <div className={`flex space-x-5 flex-1 justify-center ${isOpen && "ml-40"}`}>
                    <Link href={"/daos/dashboard"} className={`hover:text-green ${active === "" && "text-green"}`}>
                        Dashboard
                    </Link>
                    <Link href={"/daos/governance"} className={`hover:text-green ${active === "governance" && "text-green"}`}>
                        Governance
                    </Link>
                    <Link href={"/daos/treasury"} className={`hover:text-green ${active === "treasury" && "text-green"}`}>
                        Treasury
                    </Link>
                    <Link href={"/daos/members"} className={`hover:text-green ${active === "members" && "text-green"}`}>
                        Members
                    </Link>
                    <Link href={"/daos/settings"} className={`hover:text-green ${active === "settings" && "text-green"}`}>
                        Settings
                    </Link>
                </div>                
            </div>
            <div className="flex justify-end z-20">
                <Web3Button />
            </div>
        </div>
    )
}