import AddActionButton from "@/components/buttons/AddActionButton";
import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { createProposalStepAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function AddAction() {
  const [, setStep] = useRecoilState(createProposalStepAtom);
  setStep(3);
  return (
    <CreateNewProposalAppShell>
      <AddActionButton />
    </CreateNewProposalAppShell>
  );
}
