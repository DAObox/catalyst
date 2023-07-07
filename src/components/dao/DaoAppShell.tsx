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
      <main className="relative flex min-h-screen w-full">
        <div className="fixed inset-y-0 left-0 w-24">
          <SideNavigation />
        </div>
        <div className="ml-24 flex min-h-screen w-full flex-1 flex-col items-center space-y-5 bg-info-bg">
          <div className="relative w-full max-w-xs space-y-[59px] px-2.5 pb-24 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
            <div className="mt-6 w-full">
              <TopNavigation />
            </div>
            <div className="flex items-center space-x-3.5">
              <div>
                <Image src={icon || "/logos/lens.png"} width={35} height={35} alt="icon" />
              </div>
              <BreadDivider />
              {currentPage === "" ? (
                <DashboardSelectNavigation />
              ) : currentPage === "governance" ? (
                <GovernanceSelectNavigation />
              ) : currentPage === "treasury" ? (
                <TreasurySelectNavigaton />
              ) : currentPage === "members" ? (
                <MembersSelectNavigation />
              ) : (
                currentPage === "settings" && <SettingsSelectNavigation />
              )}
            </div>
            {children}
          </div>
          <div className="absolute bottom-0 w-full max-w-xs px-2.5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
