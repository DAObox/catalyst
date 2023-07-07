import { type CreateDaoPageStatusProps } from "typings/typings";
import { useRecoilValue } from "recoil";
import { createProposalStepAtom } from "atoms/atoms";
import { useRouter } from "next/router";
import { newProposalStepNavigation } from "@/lib/constants";
import CreateDaoPageStatusRange from "../dao/create-dao/CreateDaoPageStatusRange";
import CreateProposalStep from "./steps/CreateProposalStep";
import ProposalDetail from "./steps/ProposalDetail";
import AddAction from "./steps/AddAction";
import ReviewProposal from "./steps/ReviewProposal";

export default function CreateProposalsPageStatus({ page }: CreateDaoPageStatusProps) {
  const step = useRecoilValue(createProposalStepAtom);
  const router = useRouter();
  return (
    <div className="space-y-10">
      <CreateDaoPageStatusRange page={page} />
      <div className="space-y-4">
        <p className="text-xl text-lighter-gray">Steps:</p>
        <div className="space-y-5">
          <CreateProposalStep
            current={step == 1 && router.pathname == newProposalStepNavigation[0] ? true : false}
          />
          <ProposalDetail
            current={step == 2 && router.pathname == newProposalStepNavigation[1] ? true : false}
          />
          <AddAction
            current={
              (step == 3 && router.pathname == newProposalStepNavigation[2]) ||
              router.pathname == newProposalStepNavigation[4] ||
              router.pathname == newProposalStepNavigation[5]
                ? true
                : false
            }
          />
          <ReviewProposal
            current={step == 4 && router.pathname == newProposalStepNavigation[3] ? true : false}
          />
        </div>
      </div>
    </div>
  );
}
