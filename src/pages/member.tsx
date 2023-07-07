import DelegateButton from "@/components/buttons/DelegateButton";
import FollowButton from "@/components/buttons/FollowButton";
import DaoAppShell from "@/components/dao/DaoAppShell";
import MemberStat from "@/components/dao/members/MemberStat";
import MemberDetailsTab from "@/components/dao/members/detail/activity/MemberDetailsTab";
import { truncate, truncateAddress } from "@/lib/functions";
import Image from "next/legacy/image";

export default function Member() {
  return (
    <DaoAppShell currentPage="members">
      <div className="relative w-full">
        <div className="relative h-fit w-full">
          <div className="relative h-36 w-full rounded-t-2xl">
            <Image
              src={"/cover.png"}
              layout="fill"
              objectFit="cover"
              alt="icon"
              className="rounded-t-3xl"
            />
          </div>
          <div className="-mt-12 w-full">
            <div className="relative h-full w-full rounded-3xl bg-gray">
              <div className="absolute -top-14 left-6 h-28 w-28 rounded-full border-[4px] border-gray">
                <Image
                  src={"/avatar.png"}
                  layout="fill"
                  objectFit="cover"
                  alt="icon"
                  className="rounded-full"
                />
              </div>
              <div className="absolute -top-5 right-8 mt-10">
                <MemberStat balance="230" power="230" />
              </div>
              <div className="relative space-y-[16px] px-8 py-12">
                <div className="mt-6 flex items-center space-x-1.5">
                  <h2 className="text-xl text-lighter-gray">
                    {truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}
                  </h2>
                  <h3 className="text-lg text-ash">@israelrex.lens</h3>
                </div>
                <div className="flex w-full space-x-10">
                  <div className="flex-1 space-y-4">
                    <p className="tex-medium-gray">
                      {truncate(
                        "Crafting decentralized experiences, bridging creativity with technology. Designing the future of web3, where user empowerment and blockchain innovation merge seamlessly. Embrace the revolution, join me on this transformative journey!",
                        250
                      )}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-light-black">Mutual Communities</div>
                      <div className="mt-1.5 flex items-center -space-x-2">
                        <div>
                          <Image
                            src={"/logos/aragon.png"}
                            width={32}
                            height={32}
                            alt="aragon icon"
                          />
                        </div>
                        <div>
                          <Image
                            src={"/logos/aragon.png"}
                            width={32}
                            height={32}
                            alt="aragon icon"
                          />
                        </div>
                        <div>
                          <Image
                            src={"/logos/aragon.png"}
                            width={32}
                            height={32}
                            alt="aragon icon"
                          />
                        </div>
                        <div>
                          <Image
                            src={"/logos/aragon.png"}
                            width={32}
                            height={32}
                            alt="aragon icon"
                          />
                        </div>
                        <div>
                          <Image
                            src={"/logos/aragon.png"}
                            width={32}
                            height={32}
                            alt="aragon icon"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green">+4 more</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <div className="w-full space-y-4">
                      <FollowButton />
                      <DelegateButton />
                    </div>
                  </div>
                </div>
                <div>
                  <MemberDetailsTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DaoAppShell>
  );
}
