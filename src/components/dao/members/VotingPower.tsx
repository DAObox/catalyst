import Image from "next/image"
import { type VotingPowerProps } from "typings/typings"

export default function VotingPower({ power }: VotingPowerProps) {
    return (
        <div className="flex items-center space-x-1.5">
            <div>
                <Image src={"/voting.png"} width={15} height={15} alt="icon" />
            </div>
            <div>
                <p className="text-lighter-gray text-sm">{power} <span className="text-medium-gray">Voting Power</span></p>
            </div>
        </div>
    )
}