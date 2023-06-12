import { type CreateDaoPageStatusRangeProps } from "typings/typings";

export default function CreateDaoPageStatusRange({ page }: CreateDaoPageStatusRangeProps) {
    return (
        <div className="flex items-center space-x-1.5">
            <div className="w-full bg-trans-gray h-2 rounded-full">
                <div className="h-2 bg-green rounded-full" style={{ width: `${(page / 4) * 100}%` }} />
            </div>
            <p className="text-white font-medium">{page}/4</p>
        </div>
    )
}