/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type VoteHorizontalRangeProps } from "typings/typings";

export default function VoteHorizontalRange({ _for, against, abstain }: VoteHorizontalRangeProps) {
    const width_for = `w-[${_for}%]`
    const width_against = `w-[${against}%]`
    const width_abstain = `w-[${abstain}%]`
    return (
        <div className="w-full p-10 rounded-xl bg-gray border border-gray-border space-y-5">
            <h3 className="text-xl font-bold text-lighter-gray">Voting</h3>
            <div className="flex items-center">
                <div className={`h-2 ${width_for} bg-green rounded-l-full`} />
                <div className={`h-2 ${width_against} bg-red ${_for === 0 && "rounded-l-full"} ${abstain === 0 && "rounded-r-full"}`} />
                <div className={`h-2 ${width_abstain} bg-light-black rounded-r-full`} />
            </div>
        </div>
    )
}