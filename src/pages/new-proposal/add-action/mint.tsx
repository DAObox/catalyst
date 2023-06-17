/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { numberOfNftsAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function Mint() {
    const [count, setCount] = useRecoilState(numberOfNftsAtom)
    return (
        <CreateNewProposalAppShell>
            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium text-lighter-gray">Mint NFTs</h2>
                    <p className="text-light-black text-lg">Create a proposal to mint more nfts.</p>
                </div>
                <div className="flex space-x-5 w-full">
                    <div className="space-y-1.5 w-full">
                        <p className="text-lighter-gray">Address</p>
                        <div className="w-full bg-gray flex items-center justify-between rounded-lg">
                            <input type="text" className="w-full p-2.5 bg-transparent outline-none placeholder:text-light-black text-light-black"
                                placeholder="Enter wallet address" />
                            <button className="px-2.5">
                                <p className="text-lighter-gray">Paste</p>
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-lighter-gray">NFTS</p>
                        <div className="w-48 bg-gray flex items-center py-2.5 px-4 justify-between rounded-lg">
                            <button onClick={() => count >= 1 && setCount(count - 1)}>
                                <MinusIcon className="w-6 h-6 text-lighter-gray" />
                            </button>
                            <div className="flex-1 text-center">
                                <p className="text-lighter-gray">{count}</p>
                            </div>
                            <button onClick={() => count <= 99 && setCount(count + 1)}>
                                <PlusIcon className="w-6 h-6 text-lighter-gray" />
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-lighter-gray">Total</p>
                        <input type="number" className="bg-gray p-2.5 outline-none placeholder:text-light-black text-light-black rounded-lg w-28" placeholder="0" />
                    </div>
                </div>
            </div>
        </CreateNewProposalAppShell>
    )
}