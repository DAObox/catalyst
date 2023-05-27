import Image from "next/image";
import daoboxLogo from "../../public/logos/daobox.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "./buttons/CustomConenctButton";

export default function Navbar() {
    const { openConnectModal } = useConnectModal();
    return (
			<div className="w-full flex justify-center absolute top-0 mt-8">
				<div className="px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl flex justify-center w-full">
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
		);
}