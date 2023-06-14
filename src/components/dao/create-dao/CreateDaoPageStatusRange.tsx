import { type CreateDaoPageStatusRangeProps } from "typings/typings";
import RangeIndicator from "./RangeIndicator";

export default function CreateDaoPageStatusRange({ page }: CreateDaoPageStatusRangeProps) {
    return (
        <div className="flex items-center space-x-1.5 w-full">
            <RangeIndicator max={4} min={page} />
            <p className="text-white font-medium">{page}/4</p>
        </div>
    )
}