import DaoAppShell from "@/components/dao/DaoAppShell";
import TreasuryBalanceCard from "@/components/dao/treasury/TreasuryBalanceCard";
import TokensList from "../components/dao/treasury/TokensList";
import LastTransactions from "../components/dao/treasury/LastTransactions";

export default function Treasury() {
  return (
    <DaoAppShell currentPage="treasury">
      <div className="space-y-10">
        <TreasuryBalanceCard />
        <div>
          <TokensList />
        </div>
        <div>
          <LastTransactions />
        </div>
      </div>
    </DaoAppShell>
  );
}
