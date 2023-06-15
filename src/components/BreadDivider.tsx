import { type BreadDividerProps } from "typings/typings";

export default function BreadDivider({ className }: BreadDividerProps) {
    return (
        <div>
            <h1 className={`text-light-black text-2xl ${className || ""}`}>/</h1>
        </div>
    )
}