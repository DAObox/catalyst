/* eslint-disable react/no-unescaped-entities */
import { truncate, truncateAddress } from "@/lib/functions";
import Image from "next/legacy/image";
import Link from "next/link";
import MemberStat from "./MemberStat";

export default function MemberCardGrid() {
  return (
    <Link href="/daos/members/member">
      <div className="relative w-[300px] sm:w-[285px] md:w-[325px] lg:w-[363px]">
        <div className="relative h-fit w-full">
          <div className="relative h-24 w-full rounded-t-2xl">
            <Image
              src={"/cover.png"}
              layout="fill"
              objectFit="cover"
              alt="icon"
              className="rounded-t-3xl"
            />
          </div>
          <div className="-mt-24 w-full">
            <div className="relative h-full w-full rounded-3xl bg-gray">
              <div className="absolute -top-6 left-3.5 h-14 w-14 rounded-full border-[4px] border-gray">
                <Image
                  src={"/avatar.png"}
                  layout="fill"
                  objectFit="cover"
                  alt="icon"
                  className="rounded-full"
                />
              </div>
              <div className="relative mt-12 space-y-[16px] p-5">
                <div>
                  <h2 className="mt-5 text-xl text-lighter-gray">
                    {truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}
                  </h2>
                </div>
                <div>
                  <p className="tex-medium-gray">
                    {truncate(
                      "Embrace the revolution, join me on this transformative journey!",
                      100
                    )}
                  </p>
                </div>
                <div className="h-[1px] w-full bg-medium-gray" />
                <div>
                  <MemberStat balance="230" power="230" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
