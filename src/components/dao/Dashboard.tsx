import Image from "next/image";
import Link from "next/link";
import {
  Button
} from "@material-tailwind/react";
import DaoAccordion from "./DaoAccordion";
import Divider from "../Divider";

export default function Dashboard() {
    return (
        <div className="w-full bg-gray border border-gray-border h-fit rounded-xl p-5 space-y-3.5">
            <div className="flex items-center space-x-1">
                <div>
                    <Image src={"/logos/rect-lg.png"} width={35} height={35} alt="icon" />
                </div>
                <div>
                    <h1 className="text-white text-3xl font-medium">ENS</h1>
                </div>
            </div>
            <div>
                <p className="text-white">The Ethereum Name Service (ENS) is a distrubuted, Open, and extensible naming system based on the...</p>
            </div>
            <div>   
                <Link href={"https://ens.com"} target="_blank" className="flex items-center space-x-1 w-fit">
                    <div>
                        <Image src={"/link.png"} width={20} height={20} alt="icon" />
                    </div>
                    <div>
                        <p className="text-white text-sm">https://ens.com</p>
                    </div>
                </Link>
            </div>
            <div className="flex space-x-3 items-center">
                <div>
                    <Button className="bg-gray-border shadow-none">
                        <div className="flex items-center space-x-1">
                            <div>
                                <Image src={"/logos/polygon.png"} width={20} height={20} alt="icon" />
                            </div>
                            <div>
                                <p>Polygon</p>
                            </div>
                        </div>
                    </Button>
                </div>
                <div>
                    <Button className="bg-blue">10,000,000 Supply</Button>
                </div>
            </div>
            <div>
                <Divider />
            </div>
            <div>
                <DaoAccordion />
            </div>
        </div>
    )
}