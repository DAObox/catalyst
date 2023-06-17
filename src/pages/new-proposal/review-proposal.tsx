import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { createProposalStepAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function ReviewProposal() {
    const [, setStep] = useRecoilState(createProposalStepAtom)
    setStep(4)
    return(
        <CreateNewProposalAppShell>

        </CreateNewProposalAppShell>
    )
}