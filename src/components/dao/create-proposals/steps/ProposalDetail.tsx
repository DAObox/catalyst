import { type StepProps } from "typings/typings";

export default function ProposalDetail({ current }: StepProps) {
    return(
        <div className={`max-w-full p-10 ${current ? "bg-trans-gray" : "border border-medium-gray"} text-lighter-gray rounded-lg`}>
            <p className="text-xl text-center">Proposal <br /> Detail</p>
        </div>
    )
}