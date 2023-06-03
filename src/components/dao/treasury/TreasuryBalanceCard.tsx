import NewTransferButton from "@/components/buttons/NewTransferButton";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";

export default function TreasuryBalanceCard() {
    return (
        <div className="w-full flex items-center justify-between bg-gray rounded-lg p-10">
            <div className="space-y-2">
                <div className="flex items-center space-x-1">
                    <div>
                        <p className="text-light-black">Total Balance</p>
                    </div>
                    <div>
                        <Tooltip content="Question mark">
                            <QuestionMarkCircleIcon className="w-5 h-5 text-light-black hover:Cursor-pointer" />
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-light-gray">$40,580.70 <span className="text-xs font-normal">USDC</span></h1>
                </div>
            </div>
            <div>
                <NewTransferButton />
            </div>
        </div>
    )
}