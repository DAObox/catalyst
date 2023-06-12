/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { selectBlockchainTab } from "atoms/atoms"
import { useRecoilState } from "recoil"

export default function SelectBlockchainTabs() {
    const [tab, setTabs] = useRecoilState(selectBlockchainTab)
    return(
        <div className="w-full p-1.5 rounded-lg bg-trans-gray flex">
            <button
                className={`w-full p-2.5 ${tab == "mainnet" && "bg-gray"} flex-1 text-white`}
                onClick={() => setTabs("mainnet")}>Mainnet</button>
            <button className={`w-full p-2.5 flex-1 text-white ${tab == "testnet" && "bg-gray"}`}
                onClick={() => setTabs("testnet")}>Testnet</button>
        </div> 
    )
}