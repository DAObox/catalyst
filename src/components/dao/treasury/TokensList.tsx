import TokenItem from "./TokenItem";

export default function TokensList() {
  return (
    <div className="w-full rounded-lg bg-gray p-10">
      <div>
        <p className="text-2xl font-bold text-light-gray">Tokens</p>
      </div>
      <div className="divide-gray-200 card mt-7 divide-y">
        <TokenItem />
        <TokenItem />
        <TokenItem />
      </div>
    </div>
  );
}
