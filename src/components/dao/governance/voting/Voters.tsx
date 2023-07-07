import { useRecoilValue } from "recoil";
import Voter from "./Voter";
import VotersTab from "./VotersTabs";
import { voteTabAtom } from "atoms/atoms";

export default function Voters() {
  const currentTab = useRecoilValue(voteTabAtom);
  return (
    <div className="h-fit space-y-3 rounded-xl border border-gray-border bg-gray px-10 py-10">
      <div>
        <h1 className="text-xl text-lighter-gray">Voters</h1>
      </div>
      <VotersTab />
      {currentTab === "for" ? (
        <div className="scrollbar-hide max-h-80 w-full space-y-3 overflow-y-scroll">
          <Voter />
          <Voter />
          <Voter />
          <Voter />
          <Voter />
        </div>
      ) : currentTab === "against" ? (
        <div className="scrollbar-hide max-h-80 w-full space-y-3 overflow-y-scroll">
          <Voter />
          <Voter />
          <Voter />
          <Voter />
          <Voter />
        </div>
      ) : (
        <div className="scrollbar-hide max-h-80 w-full space-y-3 overflow-y-scroll">
          <Voter />
          <Voter />
          <Voter />
          <Voter />
          <Voter />
        </div>
      )}
    </div>
  );
}
