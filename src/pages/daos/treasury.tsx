import DaoAppShell from "@/components/dao/DaoAppShell";
import TreasuryBalanceCard from "@/components/dao/treasury/TreasuryBalanceCard";

export default function Treasury() {
    return(
        <DaoAppShell currentPage="treasury">
            <TreasuryBalanceCard />
        </DaoAppShell>
    )
}