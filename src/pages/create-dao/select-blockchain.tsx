import CreateDaoAccordion from "@/components/dao/create-dao/CreateDaoAccordion";
import CreateDaoAppShell from "@/components/dao/create-dao/CreateDaoAppShell";
import SelectBlockchainTabs from "../../components/dao/create-dao/SelectBlockchainTabs";
import { useRecoilState, useRecoilValue } from "recoil";
import { createDaoStep, selectBlockchainTab } from "atoms/atoms";
import Mainnet from "@/components/dao/create-dao/Mainnet";
import Testnet from "@/components/dao/create-dao/Testnet";

export default function SelectBlockchain() {
    const tab = useRecoilValue(selectBlockchainTab)
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(1)
    return (
        <CreateDaoAppShell className="space-y-10">
            <div className="w-full bg-gray border border-gray-border p-10 rounded-xl">
                <div className="space-y-2">
                    <h1 className="text-lighter-gray text-4xl">Create Your DAO</h1>
                    <p className="text-light-gray">Create your DAO description</p>
                    <div>
                        <CreateDaoAccordion />
                    </div>
                </div>
            </div>
            <SelectBlockchainTabs />
            {
                tab == "mainnet" ? <Mainnet /> : <Testnet />
            }
        </CreateDaoAppShell>
    )
}