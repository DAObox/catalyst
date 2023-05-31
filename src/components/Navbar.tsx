import Image from "next/image";
import daoboxLogo from "../../public/logos/daobox.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "./buttons/CustomConenctButton";

export default function Navbar() {
    const { openConnectModal } = useConnectModal();
    return (
		<div className="w-full relative">
			<div className="w-full flex justify-center absolute top-0 mt-8">
				<div className="w-full">
					<div className="w-full flex items-center justify-between h-fit">
						<div className="w-40">
							<Image
								src={daoboxLogo}
								alt="logo"
								width={182}
								height={44}
							/>
						</div>
                        <div>
                            {
                                openConnectModal ? <CustomConnectButton /> : <ConnectButton />
                            }
                        </div>
					</div>
				</div>
			</div>			
		</div>
	);
}