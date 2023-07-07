import { type BreadDividerProps } from "typings/typings";

export default function BreadDivider({ className }: BreadDividerProps) {
  return (
    <div>
      <h1 className={`text-2xl text-light-black ${className || ""}`}>/</h1>
    </div>
  );
}
