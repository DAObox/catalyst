/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { selectBlockchainTab } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function SelectBlockchainTabs() {
  const [tab, setTabs] = useRecoilState(selectBlockchainTab);
  return (
    <div className="flex w-full rounded-lg bg-trans-gray p-1.5">
      <button
        className={`w-full p-2.5 ${tab == "mainnet" && "bg-gray"} flex-1 text-white`}
        onClick={() => setTabs("mainnet")}
      >
        Mainnet
      </button>
      <button
        className={`w-full flex-1 p-2.5 text-white ${tab == "testnet" && "bg-gray"}`}
        onClick={() => setTabs("testnet")}
      >
        Testnet
      </button>
    </div>
  );
}
