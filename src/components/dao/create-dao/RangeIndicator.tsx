import { type RangeIndicatorProps } from "typings/typings";

export default function RangeIndicator({ max, min }: RangeIndicatorProps) {
  return (
    <div className="h-2 w-full rounded-full bg-trans-gray">
      <div
        className="h-2 w-full rounded-full bg-green"
        style={{ width: `${(min / max) * 100}%` }}
      />
    </div>
  );
}
