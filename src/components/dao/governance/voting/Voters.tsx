import { useRecoilValue } from "recoil";
import Voter from "./Voter";
import VotersTab from "./VotersTabs";
import { voteTabAtom } from "atoms/atoms";

export default function Voters() {
    const currentTab = useRecoilValue(voteTabAtom)
    return (
        <div className="space-y-3 bg-gray border border-gray-border h-fit rounded-xl px-10 py-10">
            <div>
                <h1 className="text-xl text-lighter-gray">Voters</h1>
            </div>
            <VotersTab />
            {
                currentTab === "for" ? (
                    <div className="w-full max-h-80 overflow-y-scroll scrollbar-hide space-y-3">
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                    </div>
                ) : currentTab === "against" ? (
                    <div className="w-full max-h-80 overflow-y-scroll scrollbar-hide space-y-3">
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                    </div>
                ) : (
                    <div className="w-full max-h-80 overflow-y-scroll scrollbar-hide space-y-3">
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                        <Voter />
                    </div>
                )
            }
        </div>
    )
}