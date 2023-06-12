import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import daoFooterLogo from "../../public/logos/dao-d.png";
import LensIcon from "./icons/LensIcon";

export function Footer() {
    return (
			<footer className="flex items-center text-white justify-between space-x-2.5 sm:justify-between pr-7 sm:pr-0 py-5 w-full">
				<Link href={"/"} className="items-center grid-flow-col w-8">
					<Image
						src={daoFooterLogo}
						alt="logo"
						width={32}
						height={32}
					/>
				</Link>
				<div className="flex space-x-2.5">
					<SocialIcon
						network="twitter"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://twitter.com/daobox_app"
					/>
					<SocialIcon
						network="discord"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://discord.gg/CNjdqGwYGy"
					/>
					<SocialIcon
						network="github"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://github.com/DAObox"
					/>
					<Link target="_blank" href={"https://lenster.xyz/u/daobox"}>
						<LensIcon />
					</Link>
				</div>
			</footer>
		);
}