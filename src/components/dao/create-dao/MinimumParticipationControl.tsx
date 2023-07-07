import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import RangeIndicator from "./RangeIndicator";
import { useRecoilState } from "recoil";
import { minimumParticipationControlAtom } from "atoms/atoms";

export default function MinimumParticipationControl() {
  const [count, setCount] = useRecoilState(minimumParticipationControlAtom);
  return (
    <div className="flex items-center space-x-5">
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
      <div className="w-full flex-1">
        <div className="flex w-full justify-between">
          <p className="text-lighter-gray">{">"}100000</p>
          <p className="text-lighter-gray">of 100000 Tokens</p>
        </div>
        <div className="flex w-full flex-1 items-center justify-between rounded-lg bg-gray px-4 py-2">
          <RangeIndicator max={100000} min={(count / 100) * 100000} />
        </div>
      </div>
    </div>
  );
}
