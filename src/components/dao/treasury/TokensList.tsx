import TokenItem from "./TokenItem";

export default function TokensList() {
    return (
        <div className="w-full bg-gray rounded-lg p-10">
            <div>
                <p className="text-2xl font-bold text-light-gray">Tokens</p>
            </div>
            <div className="card divide-y divide-gray-200 mt-7">
                <TokenItem />
                <TokenItem />
                <TokenItem />
            </div>
        </div>
    )
}