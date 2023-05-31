import DaoTopNavigation from "@/components/dao/DaoTopNavigation";
import SideNavigation from "@/components/dao/SideNavigation";
import Dashboard from "@/components/dao/Dashboard";
import Governance from "@/components/dao/Governance";
import Treasury from "@/components/dao/Treasury";
import Members from "@/components/dao/Members";
import Settings from "@/components/dao/Settings";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "@/components/Footer";

export default function Dao() {
    const currentPage = useRouter().query.page;
    console.log(currentPage)
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
                    <div className="w-full relative px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl space-y-10 pb-24">
                        <div className="mt-6 w-full">
                            <DaoTopNavigation active={currentPage?.toString() || ""} />
                        </div>
                        {
                            currentPage === undefined ? <Dashboard /> : 
                            currentPage === "governance" ? <Governance /> : 
                            currentPage === "treasury" ? <Treasury /> : 
                            currentPage === "members" ? <Members /> :
                            currentPage === "settings" && <Settings />
                        }
                    </div>
                    <div className="px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full absolute bottom-0">
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}