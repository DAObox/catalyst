import Dot from "@/components/dao/members/detail/activity/Dot";
import { truncateAddress } from "@/lib/functions";
import Link from "next/link";
import ActiveBadge from "@/components/ActiveBadge";
import CopyButton from "@/components/buttons/CopyButton";
import GovernanceDivider from "./GovernanceDivider";

export default function GovernanceStatusCard() {
  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-border bg-gray p-10">
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <div>
            <div>
              <h3 className="text-xl font-bold text-lighter-gray">Campaign</h3>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div>
              <Link href={"https://daobox.com/campaign"} target="_blank" className="text-green">
                https://daobox.com/campaign
              </Link>
            </div>
            <CopyButton data={"https://daobox.com/campaign"} />
          </div>
        </div>
        <div>
          <ActiveBadge />
        </div>
      </div>
      <GovernanceDivider />
      <div className="flex w-full items-center space-x-2.5 rounded-lg">
        <p className="text-base text-light-gray">
          Published by:{" "}
          <span className="text-green">
            {truncateAddress("0x4b75F7F56d10D898822A4F2B99b08EF40e5BF7C8")}
          </span>
        </p>
        <Dot />
        <p className="text-base text-light-gray">June 3rd, 2023</p>
      </div>
    </div>
  );
}
