import { earlyExecutionAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function EarlyExecutionControl() {
  const [earlyExecution, setEarlyExecution] = useRecoilState(earlyExecutionAtom);
  return (
    <div className="flex w-full items-center space-x-5">
      <button
        className="flex flex-1 items-center justify-start rounded-lg bg-gray px-5 py-3"
        onClick={() => setEarlyExecution("yes")}
      >
        <div className="flex items-center space-x-1.5">
          <input
            type="radio"
            name="early-execution-radio"
            className="radio border border-light-black checked:border-0 checked:bg-green checked:outline-0"
            checked={earlyExecution == "yes" ? true : false}
          />
          <h3 className="font-medium text-lighter-gray">Yes</h3>
        </div>
      </button>
      <button
        className="justify-star flex flex-1 items-center rounded-lg bg-gray px-5 py-3"
        onClick={() => setEarlyExecution("no")}
      >
        <div className="flex items-center space-x-1.5">
          <input
            type="radio"
            name="early-execution-radio"
            className="radio border border-light-black checked:border-0 checked:bg-green checked:outline-0"
            checked={earlyExecution == "no" ? true : false}
          />
          <h3 className="font-medium text-lighter-gray">No</h3>
        </div>
      </button>
    </div>
  );
}
