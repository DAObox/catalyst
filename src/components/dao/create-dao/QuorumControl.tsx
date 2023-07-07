import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { quorumAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";
import RangeIndicator from "./RangeIndicator";

export default function QuorumControl() {
  const [count, setCount] = useRecoilState(quorumAtom);
  return (
    <div className="flex w-full space-x-5">
      <div className="flex w-48 items-center justify-between rounded-lg bg-gray px-4 py-2.5">
        <button onClick={() => count >= 1 && setCount(count - 1)}>
          <MinusIcon className="h-6 w-6 text-lighter-gray" />
        </button>
        <div className="flex-1 text-center">
          <p className="text-lighter-gray">{count}%</p>
        </div>
        <button onClick={() => count <= 99 && setCount(count + 1)}>
          <PlusIcon className="h-6 w-6 text-lighter-gray" />
        </button>
      </div>
      <div className="flex w-full flex-1 items-center justify-between space-x-5 rounded-lg bg-gray px-4 py-2.5">
        <p className="text-lighter-gray">Yes</p>
        <div className="flex-1">
          <RangeIndicator max={100} min={count} />
        </div>
        <p className="text-lighter-gray">No</p>
      </div>
    </div>
  );
}
