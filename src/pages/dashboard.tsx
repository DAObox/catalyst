import Block from "@/components/Block";
import Proposals from "../components/dao/dashboard/Proposals";
import DaoAppShell from "@/components/dao/DaoAppShell";
import TopDelegates from "@/components/dao/dashboard/TopDelegates";
import Image from "next/image";
import { type DashnoardPageProps } from "typings/typings";

export default function Dashboard({ icon }: DashnoardPageProps) {
    return (
        <DaoAppShell currentPage="">
            <div className="space-y-10">
                <div className="w-full bg-gray border border-gray-border h-fit rounded-xl p-10 space-y-4">
                    <div className="flex items-center space-x-2">
                        <Image src={icon || "/logos/lens.png"} width={35} height={35} alt="icon" />
                        <h1 className="text-4xl font-medium text-lighter-gray">Lens Protocol</h1>
                    </div>
                    <div>
                        <p className="text-light-gray">The Social Layer of Web3 🌿</p>
                    </div>
                    <div className="flex items-center space-x-2.5">
                        <Block text="Polygon" className="bg-blue" url="/logos/polygon.png" />
                        <Block text="Polygon" className="bg-trans-gray" />
                        <Block text="Polygon" className="bg-trans-gray" />
                    </div>
                </div>
                <div className="w-full flex space-x-5">
                    <div className="w-full bg-gray border border-gray-border h-fit rounded-xl py-5 px-10 space-y-3.5">
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