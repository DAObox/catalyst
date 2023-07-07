import CreateDaoAccordion from "@/components/dao/create-dao/CreateDaoAccordion";
import CreateDaoAppShell from "@/components/dao/create-dao/CreateDaoAppShell";
import SelectBlockchainTabs from "../../components/dao/create-dao/SelectBlockchainTabs";
import { useRecoilState, useRecoilValue } from "recoil";
import { createDaoStep, selectBlockchainTab } from "atoms/atoms";
import Mainnet from "@/components/dao/create-dao/Mainnet";
import Testnet from "@/components/dao/create-dao/Testnet";

export default function SelectBlockchain() {
  const tab = useRecoilValue(selectBlockchainTab);
  const [, setCurrent] = useRecoilState(createDaoStep);
  setCurrent(1);
  return (
    <CreateDaoAppShell className="space-y-10">
      <div className="w-full rounded-xl border border-gray-border bg-gray p-10">
        <div className="space-y-2">
          <h1 className="text-4xl text-lighter-gray">Create Your DAO</h1>
          <p className="text-light-gray">Create your DAO description</p>
          <div>
            <CreateDaoAccordion />
          </div>
        </div>
      </div>
      <SelectBlockchainTabs />
      {tab == "mainnet" ? <Mainnet /> : <Testnet />}
    </CreateDaoAppShell>
  );
}
