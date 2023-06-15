/* eslint-disable @typescript-eslint/no-misused-promises */
import { newProposalStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createProposalStepAtom } from "atoms/atoms";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function NewProposalBackButton() {
    const step = useRecoilValue(createProposalStepAtom)
    const router = useRouter()
    return(
        <Button onClick={() => step !== 5 && router.push(newProposalStepNavigation[step-2] || "")} 
        className="bg-transparent border border-lighter-gray px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3"
        disabled={step - 1 == 0 ? true : false}>Back</Button>
    )
}