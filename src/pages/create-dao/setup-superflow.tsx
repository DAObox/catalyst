import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import { getCurrency } from "@/lib/functions";
import { createDaoStep, currencyAtom, followAmountAtom, selectedBlockchainName, fundsRecipientAtom } from "atoms/atoms";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

export default function SetupSuperFlow() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    const blockchain = useRecoilValue(selectedBlockchainName)
    const [, setCurrency] = useRecoilState(currencyAtom)
    const [followAmount, setFollowAmount] = useRecoilState(followAmountAtom)
    const [fundsRecepient, setFundsRecepient] = useRecoilState(fundsRecipientAtom)
    setCurrent(3)
    return (
        <CreateDaoAppShell className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium text-lighter-gray">Set Super Follow</h2>
                <p className="text-light-black text-lg">Setting super follow makes user spend crypto to follow you, and it{"’"}s a good way to earn it.</p>
            </div>
            <div className="space-y-3">
                <p className="text-lighter-gray">Select Currency</p>
                <input type="text" value={getCurrency(blockchain, setCurrency)} className="w-full p-4 bg-gray-border rounded-lg text-lighter-gray" disabled />
            </div>
            <div className="space-y-3">
                <p className="text-lighter-gray">Follow Amount</p>
                <div className="flex items-center">
                    <div className="p-[18px] bg-gray-border rounded-l-lg">
                        <Image src={"/logos/polygon.png"} width={20} height={20} alt="token icon" />
                    </div>
                    <div className="w-full">
                        <input type="number" placeholder="9" className="w-full py-4 bg-gray-border rounded-r-lg text-lighter-gray outline-0"
                        onChange={e => setFollowAmount(e.target.value)} value={followAmount} />
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <p className="text-lighter-gray">Funds Recipient</p>
                <input type="text" className="w-full p-4 bg-gray-border rounded-lg text-lighter-gray outline-0"
                onChange={e => setFundsRecepient(e.target.value)} value={fundsRecepient} />
            </div>
        </CreateDaoAppShell>
    )
}