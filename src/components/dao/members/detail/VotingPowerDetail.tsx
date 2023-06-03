import Image from "next/image"
import { type VotingPowerProps } from "typings/typings"

export default function VotingPower({ power }: VotingPowerProps) {
    return (
        <div className="flex items-center space-x-1.5">
            <div>
                <Image src={"/voting-light.png"} width={10.5} height={10.5} alt="icon" />
            </div>
            <div>
                <p className="text-lighter-gray text-[10px]">{power}</p>
            </div>
        </div>
    )
}