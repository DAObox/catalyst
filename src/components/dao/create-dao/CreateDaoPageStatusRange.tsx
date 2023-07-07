import { type CreateDaoPageStatusRangeProps } from "typings/typings";
import RangeIndicator from "./RangeIndicator";

export default function CreateDaoPageStatusRange({ page }: CreateDaoPageStatusRangeProps) {
  return (
    <div className="flex w-full items-center space-x-1.5">
      <RangeIndicator max={4} min={page} />
      <p className="font-medium text-white">{page}/4</p>
    </div>
  );
}
