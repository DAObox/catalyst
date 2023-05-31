/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "./buttons/CustomConenctButton";
import Link from "next/link";

export default function DaoTopNavigation() {
    const { openConnectModal } = useConnectModal();
    return (
        <div className="flex items-center justify-between text-white">
            <div className="flex-1 flex justify-between">
                <div className={`flex space-x-5 flex-1 justify-center ${!openConnectModal && "ml-40"}`}>
                    <Link href={"/"} className="hover:text-green">
                        Dashboard
                    </Link>
                    <Link href={"/"} className="hover:text-green">
                        Governance
                    </Link>
                    <Link href={"/"} className="hover:text-green">
                        Treasury
                    </Link>
                    <Link href={"/"} className="hover:text-green">
                        Members
                    </Link>
                    <Link href={"/"} className="hover:text-green">
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