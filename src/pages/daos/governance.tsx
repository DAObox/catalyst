import DaoAppShell from "@/components/dao/DaoAppShell";
import GovernanceDetails from "@/components/dao/governance/GovernanceDetails";
import GovernanceStatusCard from "@/components/dao/governance/GovernanceStatusCard";

export default function Governance() {
    return (
        <DaoAppShell currentPage="governance">
            <div className="w-full space-y-10">
                <GovernanceStatusCard />
                <GovernanceDetails />
            </div>
        </DaoAppShell>
    )
}