import SideNavigation from "@/components/dao/SideNavigation";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { type DaoAppShellProps } from "typings/typings";
import CreateDaoTopNavigation from "./CreateDaoTopNavigation";
import CreateDaoPageStatus from "./CreateDaoPageStatus";
import { useRecoilValue } from "recoil";
import { createDaoStep } from "atoms/atoms";
import CreateDaoBackButton from "../buttons/CreateDaoBackButton";
import CreateDaoNextButton from "../buttons/CreateDaoNextButton";

export default function CreateDaoAppShell({ children }: DaoAppShellProps) {
    const page = useRecoilValue(createDaoStep)
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
                            <CreateDaoTopNavigation />
                        </div>
                        <div className="w-full flex space-x-10">
                            <div className="max-w-56 space-y-4">
                                <h2 className="font-bold text-2xl text-white">Create Your DAO</h2>
                                <CreateDaoPageStatus page={page} />
                            </div>
                            <div className="flex-1 min-h-full space-y-5 flex flex-col justify-between">
                                {children}
                                <div className="w-full flex justify-between">
                                    <div>
                                        <CreateDaoBackButton />
                                    </div>
                                    <div>
                                        <CreateDaoNextButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 sm:px-0 lg:px-5 xl:px-0 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full absolute bottom-0">
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}