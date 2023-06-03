import { type LastTransactionItemProps } from "typings/typings"
import DepositIcon from "./DepositIcon"
import WithdrawalIcon from "./WithdrawalIcon"
import { truncateAddress } from "@/lib/functions"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function LastTransactionItem({ type }: LastTransactionItemProps) {
    return (
        <div className="w-full flex items-center justify-between p-5">
            <div className="flex items-center space-x-2.5">
                <div>
                    {type === "deposit" ? <DepositIcon /> : <WithdrawalIcon />}
                </div>
                <div>
                    <p className="text-lighter-gray text-xl">{truncateAddress("0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29")}</p>
                    <p className="text-light-black"><span>2023-05-29</span> <span>06:30:10</span></p>
                </div>
            </div>
            <div className="flex items-center space-x-1">
                <div className="text-end">
                    <p className="text-lighter-gray text-xl font-medium"><span className="text-green">500</span> <span>USDC</span></p>
                    <p className="text-light-black">$1,499.25</p>
                </div>
                <button>
                    <ChevronRightIcon className="w-8 h-8 text-light-black" />
                </button>
            </div>
        </div>
    )
}