import { truncate } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";
import { type DaoCardProps } from "typings/typings";
import type { CardHeaderProps, CardFooterProps } from "@/lib/types";

function CardHeader({ iconSrc, title }: CardHeaderProps) {
  return (
    <div className="flex items-center space-x-1">
      <div>
        <Image src={iconSrc} width={22.5} height={22.5} alt="icon" />
      </div>
      <div>
        <h1 className="text-2xl font-medium text-white">{title}</h1>
      </div>
    </div>
  );
}

function CardFooter({
  memberCount,
  proposalCount,
  network,
  networkIconSrc,
}: CardFooterProps) {
  return (
    <div className="mt-5 flex w-full items-center rounded-lg bg-info-bg/30">
      <div className="w-full px-1 py-2.5 text-center text-sm text-white md:p-2.5">
        <p>
          <span>{memberCount}</span>{" "}
          <span className="text-light-black">Members</span>
        </p>
      </div>
      <div className="w-full text-center text-sm text-white md:p-2.5">
        <p>
          <span>{proposalCount}</span>{" "}
          <span className="text-light-black">Proposals</span>
        </p>
      </div>
      <div className="w-full rounded-r-full text-center text-sm text-white md:p-2.5">
        <div className="flex items-center space-x-1.5">
          <p className="text-light-black">{network}</p>
          <div className="flex-shrink-0">
            <Image src={networkIconSrc} width={20} height={20} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DaoCard({ href }: DaoCardProps) {
  return (
    <Link
      href={href}
      className="custom-card card w-[300px] space-y-2.5 rounded-xl bg-gray px-2 py-4 shadow-xl sm:w-[285px] md:w-[325px] md:p-4 lg:w-[315px] xl:w-[375px]"
    >
      <CardHeader iconSrc="/logos/rect.png" title="ENS" />
      <div>
        <p className="text-lg text-white">
          {truncate(
            "The Ethereum Name Service (ENS) is a distributed, Open, and extensible naming system based on the...",
            100
          )}
        </p>
      </div>
      <CardFooter
        memberCount={123}
        proposalCount={21}
        network="Polygon"
        networkIconSrc="/logos/polygon.png"
      />
    </Link>
  );
}
