import DaoAppShell from "@/components/dao/DaoAppShell";
import AddComment from "@/components/dao/governance/AddComment";
import GovernanceDetails from "@/components/dao/governance/GovernanceDetails";
import GovernanceStatus from "@/components/dao/governance/GovernanceStatus";
import GovernanceStatusCard from "@/components/dao/governance/GovernanceStatusCard";
import VoteHorizontalRange from "@/components/dao/governance/voting/VoteHorizontalRange";
import Voters from "@/components/dao/governance/voting/Voters";
import Voting from "@/components/dao/governance/voting/Voting";

export default function Governance() {
    return (
        <DaoAppShell currentPage="governance">
            <div className="w-full space-y-10">
                <GovernanceStatusCard />
                <div className="flex space-x-5">
                    <div className="flex-1 space-y-5">
                        <GovernanceDetails />
                        <Voting />
                        <VoteHorizontalRange _for={67} against={12} abstain={21} />
                        <AddComment />
                    </div>
                    <div className="max-w-xs w-full space-y-5">
                        <GovernanceStatus />
                        <Voters />
                    </div>
                </div>
            </div>
        </DaoAppShell>
    )
}