import { votersTab } from "@/lib/constants";
import { voteTabAtom } from "atoms/atoms";
import { useRecoilValue } from "recoil";
import VotingTab from "./VotingTab";

export default function VotersTab() {
    const current = useRecoilValue(voteTabAtom)
    return (
        <div>
            <nav className="flex justify-between space-x-8" aria-label="Tabs">
                {votersTab(current).map((tab) => <VotingTab key={tab.name} tab={tab} />)}
            </nav>
        </div>
    )
}