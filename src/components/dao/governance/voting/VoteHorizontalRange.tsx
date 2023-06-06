/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type VoteHorizontalRangeProps } from "typings/typings";
import Dot from "../../members/detail/activity/Dot";

export default function VoteHorizontalRange({ _for, against, abstain }: VoteHorizontalRangeProps) {
    return (
        <div className="w-full p-10 rounded-xl bg-gray border border-gray-border space-y-5">
            <h3 className="text-xl font-bold text-lighter-gray">Voting</h3>
            <div className="flex items-center w-full pl-5">
                <div className={`h-4 bg-green rounded-r-full -ml-5 rounded-l-full`} style={{
                    "width": `calc(${_for}% + 20px)`
                }} />
                <div className={`h-4 bg-red -ml-5 rounded-l-full rounded-r-full`} style={{
                    "width": `calc(${against}% + 20px)`
                }} />
                <div className={`h-4 -ml-5 bg-light-black rounded-r-full rounded-l-full`} style={{
                    "width": `calc(${abstain}% + 20px)`
                }} />
            </div>
            <div className="flex items-center space-x-1.5">
                <div>
                    <p className="text-light-black">{_for}% For</p>
                </div>
                <Dot />
                <div>
                    <p className="text-light-black">{against}% Against</p>
                </div>
                <Dot />
                <div>
                    <p className="text-light-black">{abstain}% Abstain</p>
                </div>
            </div>
        </div>
    )
}