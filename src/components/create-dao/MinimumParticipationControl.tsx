import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import RangeIndicator from "./RangeIndicator";
import { useRecoilState } from "recoil";
import { minimumParticipationControlAtom } from "atoms/atoms";

export default function MinimumParticipationControl() {
    const [count, setCount] = useRecoilState(minimumParticipationControlAtom)
    return(
        <div className="space-x-5 flex items-center">
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
            <div className="w-full flex-1">
                <div className="w-full flex justify-between">
                    <p className="text-lighter-gray">{">"}100000</p>
                    <p className="text-lighter-gray">of 100000 Tokens</p>
                </div>
                <div className="flex-1 w-full bg-gray flex items-center py-2 px-4 justify-between rounded-lg">
                    <RangeIndicator max={100000} min={(count/100)*100000} />
                </div>                
            </div>
        </div>
    )
}