import { classNames } from "@/lib/functions";
import { type VotersTabProps } from "typings/typings";
import { voteTabAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function VotingTab({ tab }: VotersTabProps) {
  const [, setCurrent] = useRecoilState(voteTabAtom);
  return (
    <div
      key={tab.name}
      className={classNames(
        tab.current
          ? "border-green text-green"
          : "border-transparent text-light-gray hover:text-green",
        "group inline-flex items-center border-b-2 px-1 py-1 font-medium hover:cursor-pointer hover:border-green"
      )}
      onClick={() => setCurrent(tab.name.toLocaleLowerCase())}
    >
      <span>{tab.name}</span>
    </div>
  );
}
