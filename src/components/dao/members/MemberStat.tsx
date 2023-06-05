import { type MembeStatProps } from "typings/typings"
import VotingPower from "./VotingPower"
import TokenBalance from "./TokenBalance"

export default function MemberStat({ balance, power }: MembeStatProps) {
    return (
        <div className="flex items-center space-x-5">
            <div>
                <TokenBalance balance={balance} />
            </div>
            <div>
                <VotingPower power={power} />
            </div>
        </div>
    )
}