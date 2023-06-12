import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { daysAtom, hoursAtom, minutesAtom } from "atoms/atoms";
import { count } from "console";
import { useRecoilState } from "recoil";

export default function DurationControl() {
    const [days, setDays] = useRecoilState(daysAtom)
    const [hours, setHours] = useRecoilState(hoursAtom)
    const [minutes, setMinutes] = useRecoilState(minutesAtom)
    return (
        <div className="flex space-x-5">
            <div className="flex-1 space-y-2">
                <p className="font-medium text-lighter-gray">Days</p>
                <div className="w-full bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg">
                    <button onClick={() => setDays(days - 1)}>
                        <MinusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                    <div className="flex-1 text-center">
                        <p className="text-lighter-gray">{days}</p>
                    </div>
                    <button onClick={() => setDays(Number(days) + 1)}>
                        <PlusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                </div>
            </div>
            <div className="flex-1 space-y-2">
                <p className="font-medium text-lighter-gray">Hours</p>
                <div className="w-full bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg">
                    <button onClick={() => hours >= 1 && setHours(hours - 1)}>
                        <MinusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                    <div className="flex-1 text-center">
                        <p className="text-lighter-gray">{hours}</p>
                    </div>
                    <button onClick={() => hours <= 23 && setHours(hours + 1)}>
                        <PlusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                </div>
            </div>
            <div className="flex-1 space-y-2">
                <p className="font-medium text-lighter-gray">Minutes</p>
                <div className="w-full bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg">
                    <button onClick={() => minutes >= 1 && setMinutes(minutes - 1)}>
                        <MinusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                    <div className="flex-1 text-center">
                        <p className="text-lighter-gray">{minutes}</p>
                    </div>
                    <button onClick={() => minutes <= 59 && setMinutes(minutes + 1)}>
                        <PlusIcon className="w-6 h-6 text-lighter-gray" />
                    </button>
                </div>
            </div>
        </div>
    )
}