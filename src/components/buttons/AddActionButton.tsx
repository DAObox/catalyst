import { PlusIcon } from "@heroicons/react/24/solid";
import { createProposalStepAtom } from "atoms/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function AddActionButton() {
  const [, setStep] = useRecoilState(createProposalStepAtom);
  setStep(3);
  return (
    <details className="dropdown mb-32">
      <summary className="btn m-1 border border-gray bg-gray hover:border-gray hover:bg-gray focus:border-gray focus:bg-gray">
        <PlusIcon className="h-6 w-6 text-lighter-gray" />
        <span className="text-lighter-gray">Add Action</span>
      </summary>
      <div className="dropdown-content menu rounded-box w-52 bg-gray p-2 shadow">
        <li>
          <Link
            href={"/new-proposal/add-action/withdraw-asset"}
            className="text-lighter-gray active:bg-base-100/5"
          >
            Withdrawal
          </Link>
        </li>
      </div>
    </details>
  );
}
