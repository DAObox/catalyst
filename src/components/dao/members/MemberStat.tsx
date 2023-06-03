import Image from "next/image"
import { type MembeStatProps } from "typings/typings"

export default function MemberStat({ balance, power }: MembeStatProps) {
    return (
        <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1">
                <div>
                    <Image src={"/coins.png"} width={15} height={15} alt="icon" />
                </div>
                <div>
                    <p className="text-lighter-gray text-sm">{balance} <span className="text-medium-gray">Token Balance</span></p>
                </div>
            </div>
            <div className="flex items-center space-x-1.5">
                <div>
                    <Image src={"/voting.png"} width={15} height={15} alt="icon" />
                </div>
                <div>
                    <p className="text-lighter-gray text-sm">{power} <span className="text-medium-gray">Voting Power</span></p>
                </div>
            </div>
        </div>
    )
}