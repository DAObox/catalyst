import { type StepProps } from "typings/typings";

export default function Governance({ current }: StepProps) {
    return(
        <div className={`max-w-full px-10 py-14 ${current ? "bg-trans-gray" : "border border-medium-gray"} text-lighter-gray rounded-lg`}>
            <p className="text-xl text-center">Governance</p>
        </div>
    )
}