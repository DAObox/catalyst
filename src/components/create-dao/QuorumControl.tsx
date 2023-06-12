import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { quorumAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";
import RangeIndicator from "./RangeIndicator";

export default function QuorumControl() {
    const [count, setCount] = useRecoilState(quorumAtom)
    return (
        <div className="flex w-full space-x-5">
            <div className="w-48 bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg">
                <button onClick={() => count >= 1 && setCount(count - 1)}>
                    <MinusIcon className="w-6 h-6 text-lighter-gray" />
                </button>
                <div className="flex-1 text-center">
                    <p className="text-lighter-gray">{count}%</p>
                </div>
                <button onClick={() => count <= 99 && setCount(count + 1)}>
                    <PlusIcon className="w-6 h-6 text-lighter-gray" />
                </button>
            </div>
            <div className="bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg space-x-5 flex-1 w-full">
                <p className="text-lighter-gray">Yes</p>
                <div className="flex-1">
                    <RangeIndicator max={100} min={count} />
                </div>
                <p className="text-lighter-gray">No</p>
            </div>
        </div>
    )
}