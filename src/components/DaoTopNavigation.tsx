import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "./buttons/CustomConenctButton";

export default function DaoTopNavigation() {
    const { openConnectModal } = useConnectModal();
    return (
        <div className="flex items-center justify-between text-white">
            <div className="flex-1 absolute inset-x-0 flex justify-center">
                <div className="flex space-x-5">
                    <div>
                        <p>Governance</p>
                    </div>
                    <div>
                        <p>Treasury</p>
                    </div>
                    <div>
                        <p>Member</p>
                    </div>
                </div>                
            </div>
            <div className="flex-1 flex justify-end z-20">
                {
                    openConnectModal ? <CustomConnectButton /> : <ConnectButton />
                }
            </div>
        </div>
    )
}