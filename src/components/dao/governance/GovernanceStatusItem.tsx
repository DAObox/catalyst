import { type GovernanceStatusItemProps } from "typings/typings";
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import VotingStarted from "@/components/icons/VotingStarted";
import Success from "@/components/icons/Success";

export default function GovernanceStatusItem({ date, type }: GovernanceStatusItemProps) {
    return (
        <div className="flex items-center space-x-1.5">
            {
                type === "Proposed" ? <CheckCircleIcon className="w-8 h-8 text-lighter-gray" /> : type === "Voting Started" ? <VotingStarted />
                : type === "Concluded" ? <CheckCircleIcon className="w-8 h-8 text-medium-gray" /> : type === "Executed" && <Success />
            }
            <div className="w-full">
                <p className={`${type === "Concluded" || type === "Executed" ? "text-medium-gray" : "text-light-black`"}`}>{date}</p>
                <p className={`${type === "Concluded" || type === "Executed" ? "text-medium-gray" : "text-lighter-gray"} font-bold`}>{type}</p>
            </div>
        </div>
    )
}