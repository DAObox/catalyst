import Image from "next/image";
import daoboxLogo from "../../public/logos/daobox.png";
import { Web3Button } from "@web3modal/react";

export default function Navbar() {
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
							<Web3Button />
						</div>
					</div>
				</div>
			</div>			
		</div>
	);
}