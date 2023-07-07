import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { daysAtom, hoursAtom, minutesAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function DurationControl() {
  const [days, setDays] = useRecoilState(daysAtom);
  const [hours, setHours] = useRecoilState(hoursAtom);
  const [minutes, setMinutes] = useRecoilState(minutesAtom);
  return (
    <div className="flex space-x-5">
      <div className="flex-1 space-y-2">
        <p className="font-medium text-lighter-gray">Days</p>
        <div className="flex w-full items-center justify-between rounded-lg bg-gray px-4 py-2.5">
          <button onClick={() => setDays(days - 1)}>
            <MinusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
          <div className="flex-1 text-center">
            <p className="text-lighter-gray">{days}</p>
          </div>
          <button onClick={() => setDays(Number(days) + 1)}>
            <PlusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-medium text-lighter-gray">Hours</p>
        <div className="flex w-full items-center justify-between rounded-lg bg-gray px-4 py-2.5">
          <button onClick={() => hours >= 1 && setHours(hours - 1)}>
            <MinusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
          <div className="flex-1 text-center">
            <p className="text-lighter-gray">{hours}</p>
          </div>
          <button onClick={() => hours <= 23 && setHours(hours + 1)}>
            <PlusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-medium text-lighter-gray">Minutes</p>
        <div className="flex w-full items-center justify-between rounded-lg bg-gray px-4 py-2.5">
          <button onClick={() => minutes >= 1 && setMinutes(minutes - 1)}>
            <MinusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
          <div className="flex-1 text-center">
            <p className="text-lighter-gray">{minutes}</p>
          </div>
          <button onClick={() => minutes <= 59 && setMinutes(minutes + 1)}>
            <PlusIcon className="h-6 w-6 text-lighter-gray" />
          </button>
        </div>
      </div>
    </div>
  );
}
