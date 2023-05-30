import DaoTopNavigation from "@/components/DaoTopNavigation";
import SideNavigation from "@/components/SideNavigation";
import Head from "next/head";

export default function Dao() {
    return (
        <div>
            <Head>
                <title>DAO</title>
            </Head>
            <main className="w-full min-h-screen flex relative">
                <div className="w-24">
                    <SideNavigation />
                </div>
                <div className="w-full min-h-screen bg-info-bg flex-1 flex justify-center">
                    <div className="w-full relative px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl space-y-10">
                        <div className="mt-6 w-full">
                            <DaoTopNavigation />
                        </div>
                        <div className="w-full bg-gray border border-gray-border h-80 rounded-xl"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}