/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type VoteHorizontalRangeProps } from "typings/typings";
import Dot from "../members/detail/activity/Dot";

export default function VoteHorizontalRange({ _for, against, abstain }: VoteHorizontalRangeProps) {
    return (
        <div className="w-full p-10 rounded-xl bg-gray border border-gray-border space-y-5">
            <h3 className="text-xl font-bold text-lighter-gray">Voting</h3>
            <div className="flex items-center w-full">
                <div className={`h-4 w-[${_for}%] bg-green ${against === 0 && "rounded-l-full"} ${abstain === 0 && "rounded-r-full"} rounded-l-full`} style={{
                    "width": `${_for}%`
                }} />
                <div className={`h-4 w-[${against}%] bg-red ${_for === 0 && "rounded-l-full"} ${abstain === 0 && "rounded-r-full"}`} style={{
                    "width": `${against}%`
                }} />
                <div className={`h-4 w-[${abstain}%] bg-light-black rounded-r-full ${_for === 0 && "rounded-l-full"} ${against === 0 && "rounded-r-full"}`} style={{
                    "width": `${abstain}%`
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