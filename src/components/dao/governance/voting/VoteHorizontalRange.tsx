/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type VoteHorizontalRangeProps } from "typings/typings";
import Dot from "../../members/detail/activity/Dot";

export default function VoteHorizontalRange({ _for, against, abstain }: VoteHorizontalRangeProps) {
  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-border bg-gray p-10">
      <h3 className="text-xl font-bold text-lighter-gray">Voting</h3>
      <div className="flex w-full items-center pl-5">
        <div
          className={`-ml-5 h-4 rounded-l-full rounded-r-full bg-green`}
          style={{
            width: `calc(${_for}% + 20px)`,
          }}
        />
        <div
          className={`-ml-5 h-4 rounded-l-full rounded-r-full bg-red`}
          style={{
            width: `calc(${against}% + 20px)`,
          }}
        />
        <div
          className={`-ml-5 h-4 rounded-l-full rounded-r-full bg-light-black`}
          style={{
            width: `calc(${abstain}% + 20px)`,
          }}
        />
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
  );
}
