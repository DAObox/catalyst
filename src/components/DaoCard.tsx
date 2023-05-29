import { truncate } from "@/lib/functions"
import Image from "next/image"
import Link from "next/link"
import { type DaoCardProps } from "typings/typings"

export default function DaoCard({ href }: DaoCardProps) {
    return(
        <Link href={href} className="w-[300px] custom-card sm:w-[285px] md:w-[325px] lg:w-[315px] xl:w-[375px] px-2 py-4 md:p-4 
        bg-gray rounded-xl card shadow-xl space-y-2.5">
            <div className="flex items-center space-x-1">
                <div>
                    <Image src={"/rect.png"} width={22.5} height={22.5} alt="icon" />
                </div>
                <div>
                    <h1 className="text-2xl font-medium text-white">ENS</h1>
                </div>
            </div>
            <div>
                <p className="text-lg text-white">{truncate("The Ethereum Name Service (ENS) is a distrubuted, Open, and extensible naming system based on the...", 100)}</p>
            </div>
            <div className="mt-5 w-full flex items-center bg-info-bg/30 rounded-lg">
                <div className="text-sm text-white py-2.5 px-1 md:p-2.5 w-full text-center">
                    <p><span>123</span> <span className="text-light-black">Members</span></p>
                </div>
                <div className="text-sm text-white md:p-2.5 w-full text-center">
                    <p><span>21</span> <span className="text-light-black">Proposals</span></p>
                </div>
                <div className="text-sm text-white md:p-2.5 w-full text-center rounded-r-full">
                    <div className="flex items-center space-x-1.5">
                        <p className="text-light-black">Polygon</p>
                        <div className="flex-shrink-0">
                            <Image src={"/logos/polygon.png"} width={20} height={20} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}