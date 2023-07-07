import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import daoFooterLogo from "../../public/logos/dao-d.png";
import LensIcon from "./icons/LensIcon";

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-between space-x-2.5 py-5 pr-7 text-white sm:justify-between sm:pr-0">
      <Link href={"/"} className="w-8 grid-flow-col items-center">
        <Image src={daoFooterLogo} alt="logo" width={32} height={32} />
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
