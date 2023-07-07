/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Footer } from "@/components/Footer";
import Head from "next/head";
import SideNavigation from "../dao/SideNavigation";
import CreateDaoTopNavigation from "../dao/create-dao/CreateDaoTopNavigation";
import { createProposalStepAtom } from "atoms/atoms";
import { useRecoilValue } from "recoil";
import { type DaoAppShellProps } from "typings/typings";
import CreateProposalsPageStatus from "./CreateProposalsPageStatus";
import NewProposalBackButton from "@/components/buttons/NewProposalBackButton";
import NewProposalContinueButton from "@/components/buttons/NewProposalContinueButton";

export default function CreateNewProposalAppShell({ children, className }: DaoAppShellProps) {
  const page = useRecoilValue(createProposalStepAtom);
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
              <CreateDaoTopNavigation />
            </div>
            <div className="flex w-full space-x-10">
              <div className="max-w-56 space-y-4">
                <h2 className="text-2xl font-bold text-white">Create Your DAO</h2>
                <CreateProposalsPageStatus page={page} />
              </div>
              <div className="flex min-h-full flex-1 flex-col justify-between space-y-10">
                <div className={`h-full flex-1 ${className}`}>{children}</div>
                <div className="flex w-full justify-between">
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
          <div className="absolute bottom-0 w-full max-w-xs px-2.5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-6xl lg:px-5 xl:px-0">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
