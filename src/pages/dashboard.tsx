import Image from "next/image";
import Link from "next/link";
import {
  Button
} from "@material-tailwind/react";
import DaoAccordion from "../components/dao/dashboard/DaoAccordion";
import Divider from "../components/Divider";
import Proposals from "../components/dao/dashboard/Proposals";
import DaoAppShell from "@/components/dao/DaoAppShell";
import TopDelegates from "@/components/dao/dashboard/TopDelegates";

export default function Dashboard() {
    return (
        <DaoAppShell currentPage="">
            <div className="space-y-10">
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
                        <p className="text-light-gray text-base">The Ethereum Name Service (ENS) is a distrubuted, Open, and extensible naming system based on the...</p>
                    </div>
                    <div>   
                        <Link href={"https://ens.com"} target="_blank" className="flex items-center space-x-1 w-fit">
                            <div>
                                <Image src={"/link.png"} width={20} height={20} alt="icon" />
                            </div>
                            <div>
                                <p className="text-light-gray text-sm">https://ens.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <div>
                            <Button className="bg-gray-border shadow-none">
                                <div className="flex items-center space-x-1 text-lighter-gray">
                                    <div>
                                        <Image src={"/logos/polygon.png"} width={20} height={20} alt="icon" />
                                    </div>
                                    <div>
                                        <p className="text-lighter-gray">Polygon</p>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button className="bg-blue text-lighter-gray">10,000,000 Supply</Button>
                        </div>
                    </div>
                    <div>
                        <Divider />
                    </div>
                    <div>
                        <DaoAccordion />
                    </div>
                </div>
                <div className="w-full flex space-x-5">
                    <div className="w-full bg-gray border border-gray-border h-fit rounded-xl p-5 space-y-3.5">
                        <Proposals />
                    </div>
                    <div className="w-96 bg-gray border border-gray-border h-fit rounded-xl p-5 space-y-3.5">
                        <TopDelegates />
                    </div>
                </div>
            </div>
        </DaoAppShell>
    )
}