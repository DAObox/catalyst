import LastTransactionItem from "./LastTransactionItem";

export default function LastTransactions() {
  return (
    <div className="w-full rounded-lg bg-gray p-10">
      <div>
        <p className="text-2xl font-bold text-light-gray">Last Transactions</p>
      </div>
      <div className="divide-gray-200 card mt-7 divide-y">
        <LastTransactionItem type="deposit" />
        <LastTransactionItem type="withdraw" />
        <LastTransactionItem type="deposit" />
      </div>
    </div>
  );
}
