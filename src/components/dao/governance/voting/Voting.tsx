import Abstain from "@/components/icons/Abstain";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { voteAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function Voting() {
  const [, setVote] = useRecoilState(voteAtom);
  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-border bg-gray p-10">
      <h3 className="text-xl font-bold text-lighter-gray">Voting</h3>
      <div className="space-y-5">
        <button type="button" className="w-full" onClick={() => setVote("for")}>
          <div className="form-control rounded-lg border border-light-gray">
            <label className="label cursor-pointer px-3 py-4">
              <div className="label-text flex items-center space-x-1 text-light-black">
                <CheckCircleIcon className="h-6 w-6 text-light-black" />
                <span>For</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-light-black checked:border-0 checked:bg-green checked:outline-0"
                checked
              />
            </label>
          </div>
        </button>
        <button type="button" className="w-full" onClick={() => setVote("against")}>
          <div className="form-control rounded-lg border border-light-gray">
            <label className="label cursor-pointer px-3 py-4">
              <div className="label-text flex items-center space-x-1 text-light-black">
                <XCircleIcon className="h-6 w-6 text-light-black" />
                <span>Against</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-light-black checked:border-0 checked:bg-green checked:outline-0"
                checked
              />
            </label>
          </div>
        </button>
        <button type="button" className="w-full" onClick={() => setVote("abstain")}>
          <div className="form-control rounded-lg border border-light-gray">
            <label className="label cursor-pointer px-3 py-4">
              <div className="label-text flex items-center space-x-1 text-light-black">
                <Abstain />
                <span>Abstain</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-light-black checked:border-0 checked:bg-green checked:outline-0"
                checked
              />
            </label>
          </div>
        </button>
      </div>
    </div>
  );
}
