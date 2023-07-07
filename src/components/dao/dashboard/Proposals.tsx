import { Button } from "@material-tailwind/react";
import Divider from "../../Divider";
import ProposalsCards from "./ProposalCards";
import Link from "next/link";

export default function Proposals() {
  return (
    <div className="w-full space-y-5">
      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-white">Proposals</h2>
        </div>
        <div>
          <Link href={"/new-proposal/create-proposal"}>
            <Button className="flex items-center gap-3 rounded-xl bg-green px-5 py-4 text-white">
              Create new Proposals
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Divider />
      </div>
      <div className="space-y-4">
        <ProposalsCards />
        <ProposalsCards />
        <ProposalsCards />
        <ProposalsCards />
        <ProposalsCards />
        <ProposalsCards />
      </div>
    </div>
  );
}
