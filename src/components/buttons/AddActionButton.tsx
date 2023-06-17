import { PlusIcon } from "@heroicons/react/24/solid";
import { createProposalStepAtom } from "atoms/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function AddActionButton() {
    const [, setStep] = useRecoilState(createProposalStepAtom)
    setStep(3)
    return (
        <details className="dropdown mb-32">
            <summary className="m-1 btn bg-gray focus:bg-gray border border-gray focus:border-gray hover:border-gray hover:bg-gray">
                <PlusIcon className="w-6 h-6 text-lighter-gray" />
                <span className="text-lighter-gray">Add Action</span>
            </summary>
            <div className="p-2 shadow menu dropdown-content rounded-box w-52 bg-gray">
                <li>
                    <Link href={"/new-proposal/add-action/withdraw-asset"} className="text-lighter-gray active:bg-base-100/5">Withdrawal</Link>
                </li>
            </div>
        </details>
    )
}