/* eslint-disable @typescript-eslint/no-misused-promises */
import { createDaoStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep } from "atoms/atoms";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function CreateDaoBackButton() {
    const step = useRecoilValue(createDaoStep)
    const router = useRouter()
    return(
        <Button onClick={() => step !== 5 && router.push(createDaoStepNavigation[step-2] || "")} 
        className="bg-transparent border border-lighter-gray px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3"
        disabled={step - 1 == 0 ? true : false}>Back</Button>
    )
}