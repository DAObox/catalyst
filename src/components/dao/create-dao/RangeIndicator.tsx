import { type RangeIndicatorProps } from "typings/typings";

export default function RangeIndicator({ max, min }: RangeIndicatorProps) {
    return(
        <div className="w-full bg-trans-gray h-2 rounded-full">
            <div className="h-2 bg-green rounded-full w-full" style={{ width: `${(min / max) * 100}%` }} />
        </div>
    )
}