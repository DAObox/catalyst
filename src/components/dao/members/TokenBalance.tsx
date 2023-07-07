import Image from "next/image";
import { type TokenBalanceProps } from "typings/typings";

export default function TokenBalance({ balance }: TokenBalanceProps) {
  return (
    <div className="flex items-center space-x-1">
      <div>
        <Image src={"/coins.png"} width={15} height={15} alt="icon" />
      </div>
      <div>
        <p className="text-sm text-lighter-gray">
          {balance} <span className="text-medium-gray">Token Balance</span>
        </p>
      </div>
    </div>
  );
}
