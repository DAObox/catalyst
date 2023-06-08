import { Button } from "@material-tailwind/react";
import { createDaoStep } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function CreateDaoNContinueButton() {
    const [step, setStep] = useRecoilState(createDaoStep)
    return (
        <Button onClick={() => {
            step + 1 !== 5 && setStep(step + 1)
        }} className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={step + 1 == 5 ? true : false}>Continue</Button>
    )
}