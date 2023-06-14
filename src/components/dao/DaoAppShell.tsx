import SideNavigation from "@/components/dao/SideNavigation";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { type DaoAppShellProps } from "typings/typings";
import Image from "next/image";
import BreadDivider from "../BreadDivider";
import DashboardSelectNavigation from "./dashboard/DashboardSelectNavigation";
import GovernanceSelectNavigation from "./governance/GovernanceSelectNavigation";
import MembersSelectNavigation from "./members/MembersSelectNavigation";
import TreasurySelectNavigaton from "./treasury/TreasurySelectNavigation";
import SettingsSelectNavigation from "./settings/SettingsSelectNavigation";
import TopNavigation from "@/components/dao/TopNavigation";

export default function DaoAppShell({ children, currentPage, icon }: DaoAppShellProps) {
    return (
        <div>
            <Head>
                <title>DAO</title>
            </Head>
            <main className="w-full min-h-screen flex relative">
                <div className="w-24 fixed left-0 inset-y-0">
                    <SideNavigation />
                </div>
                <div className="w-full min-h-screen bg-info-bg flex-1 flex flex-col items-center ml-24 space-y-5">
                    <div className="w-full relative px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl space-y-[59px] pb-24">
                        <div className="mt-6 w-full">
                            <TopNavigation />
                        </div>
                        <div className="flex space-x-3.5 items-center">
                            <div>
                                <Image src={icon || "/logos/lens.png"} width={35} height={35} alt="icon" />
                            </div>
                            <BreadDivider />
                            {
                                currentPage === "" ? <DashboardSelectNavigation /> : 
                                currentPage === "governance" ? <GovernanceSelectNavigation /> :
                                currentPage === "treasury" ? <TreasurySelectNavigaton /> :
                                currentPage === "members" ? <MembersSelectNavigation /> :
                                currentPage === "settings" && <SettingsSelectNavigation /> 
                            }
                        </div>
                        {children}
                    </div>
                    <div className="px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full absolute bottom-0">
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}