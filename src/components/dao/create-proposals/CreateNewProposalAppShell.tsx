/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Footer } from "@/components/Footer";
import  Head from "next/head";
import SideNavigation from "../SideNavigation";
import CreateDaoTopNavigation from "../create-dao/CreateDaoTopNavigation";
import { createProposalStepAtom } from "atoms/atoms";
import { useRecoilValue } from "recoil";
import { type DaoAppShellProps } from "typings/typings";
import CreateProposalsPageStatus from "./CreateProposalsPageStatus";
import NewProposalBackButton from "@/components/buttons/NewProposalBackButton";
import NewProposalContinueButton from "@/components/buttons/NewProposalContinueButton";

export default function CreateNewProposalAppShell({ children, className }: DaoAppShellProps) {
    const page = useRecoilValue(createProposalStepAtom)
    return(
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
                                <CreateProposalsPageStatus page={page} />
                            </div>
                            <div className="flex-1 min-h-full space-y-10 flex flex-col justify-between">
                                <div className={`h-full flex-1 ${className}`}>
                                    {children}
                                </div>
                                <div className="w-full flex justify-between">
                                    <div>
                                        <NewProposalBackButton />
                                    </div>
                                    <div>
                                        <NewProposalContinueButton />
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