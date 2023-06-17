import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { getLogoFromSymbol } from "@/lib/functions";
import {
    createProposalAmountAtom, createProposalRecepientAtom, createProposalStepAtom, endDateAtom,
    proposalDescription, proposalLinks, proposalTitle, proposalVotingControlAtom,
    selectCurrencyAtom, startDateAtom
} from "atoms/atoms";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";

export default function ReviewProposal() {
    const [, setStep] = useRecoilState(createProposalStepAtom)
    const title = useRecoilValue(proposalTitle)
    const description = useRecoilValue(proposalDescription)
    const links = useRecoilValue(proposalLinks)
    const votingControl = useRecoilValue(proposalVotingControlAtom)
    const start = useRecoilValue(startDateAtom)
    const end = useRecoilValue(endDateAtom)
    const recepient = useRecoilValue(createProposalRecepientAtom)
    const symbol = useRecoilValue(selectCurrencyAtom)
    const amount = useRecoilValue(createProposalAmountAtom)
    const token = useRecoilValue(selectCurrencyAtom)
    const today = new Date()
    setStep(4)
    return (
        <CreateNewProposalAppShell className="space-y-10">
            <div className="space-y-1">
                <h1 className="text-3xl font-medium text-lighter-gray">Review</h1>
                <p className="text-light-black text-lg">Check through your proposal</p>
            </div>
            <div className="divide-y divide-light-black">
                <div className="pb-8 space-y-3">
                    <h2 className="text-2xl font-medium text-lighter-gray">{title}</h2>
                    <p className="text-light-black">{description}</p>
                </div>
                <div className="py-8 space-y-3">
                    <h2 className="text-2xl font-medium text-lighter-gray">Resources</h2>
                    {
                        links.map((link, index) => <div key={index} className="w-full flex items-center justify-between">
                            <p className="text-light-black">{link.name}</p>
                            <Link href={link.url} target="_blank" className="text-light-black">{link.url}</Link>
                        </div>)
                    }
                </div>
                <div className="py-8 space-y-3">
                    <h2 className="text-2xl font-medium text-lighter-gray">Voting</h2>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-light-black">Option</p>
                        <p className="text-light-black">{votingControl ? "Yes-No-Abstain" : "None"}</p>
                    </div>
                </div>
                <div className="py-8 space-y-3">
                    <h2 className="text-2xl font-medium text-lighter-gray">Duration</h2>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-light-black">Start</p>
                        <p className="text-light-black">{start === today.toDateString() ? "Now" : start}</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-light-black">End</p>
                        <p className="text-light-black">{end}</p>
                    </div>
                </div>
                <div className="py-8 space-y-3">
                    <h2 className="text-2xl font-medium text-lighter-gray">Withdraw Assets</h2>
                    <div className="flex items-center w-full space-x-3">
                        <input type="text" className="min-w-fit p-4 bg-gray-border rounded-lg text-lighter-gray outline-0" value={token} disabled />
                        <div className="flex items-center w-full">
                            <div className="p-[18.725px] bg-gray-border rounded-l-lg">
                                <Image src={getLogoFromSymbol(symbol)} width={20} height={20} alt="token icon" />
                            </div>
                            <div className="w-full">
                                <input type="number" className="w-full py-4 bg-gray-border rounded-r-lg text-lighter-gray outline-0" value={amount || 0} disabled />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-lighter-gray">Recipient</p>
                        <input type="text" className="w-full p-4 bg-gray-border rounded-lg text-lighter-gray outline-0" value={recepient} disabled />
                    </div>
                </div>
            </div>
        </CreateNewProposalAppShell >
    )
}