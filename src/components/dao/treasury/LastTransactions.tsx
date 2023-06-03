import LastTransactionItem from "./LastTransactionItem";

export default function LastTransactions() {
    return (
        <div className="w-full bg-gray rounded-lg p-10">
            <div>
                <p className="text-2xl font-bold text-light-gray">Last Transactions</p>
            </div>
            <div className="card divide-y divide-gray-200 mt-7">
                <LastTransactionItem type="deposit" />
                <LastTransactionItem type="withdraw" />
                <LastTransactionItem type="deposit" />
            </div>
        </div>
    )
}