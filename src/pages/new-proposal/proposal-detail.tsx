/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
import RadioInput from "@/components/RadioInput";
import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { createProposalStepAtom, endDateAtom, proposalVotingControlAtom, startDateAtom } from "atoms/atoms";
import { type SetterOrUpdater, useRecoilState } from "recoil";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function CreateProposal() {
    const [, setStep] = useRecoilState(createProposalStepAtom)
    const [startDate, setStartDate] = useRecoilState(startDateAtom)
    const [endDate, setEndDate] = useRecoilState(endDateAtom)
    const [voteControl, setVoteControl] = useRecoilState(proposalVotingControlAtom)
    const startRef: any = useRef(null)
    const endRef: any = useRef(null)
    setStep(2)
    const handleDateChange = (date: string, setDate: SetterOrUpdater<string>) => {
        setDate(date)
    }
    const date = new Date()
    return (
        <CreateNewProposalAppShell className="space-y-6">
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Voting</h2>
                <RadioInput placeholder="Yes, No, or Abstain" customFunction={() => {
                    setVoteControl(!voteControl)
                }} className="bg-gray-border p-4" />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Start date</h2>
                <p className="text-light-black">Specify the commencement and conclusion of a proposal.</p>
                <div className="flex w-full space-x-5">
                    <RadioInput placeholder="Now" className="w-full bg-gray-border p-4" customFunction={() => {
                        setStartDate(date.toDateString())
                    }} />
                    <div className="relative w-full">
                        <CalendarDaysIcon className="w-6 h-6 absolute right-3.5 top-4 z-10 text-white hover:cursor-pointer" 
                        onClick={() => startRef.current?.setOpen(true)} />
                        <DatePicker onChange={date => handleDateChange(date?.toDateString() || "", setStartDate)}
                            className="p-4 w-full placeholder:text-white outline-none rounded-md bg-gray-border text-light-black pr-10"
                            placeholderText="Custom" value={startDate} ref={startRef} />
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">End date</h2>
                <p className="text-light-black">Specify the commencement and conclusion of a proposal.</p>
                <div className="flex w-full space-x-5">
                    <RadioInput placeholder="Now" className="w-full bg-gray-border p-4" customFunction={() => {
                        setEndDate(date.toDateString())
                    }} />
                    <div className="relative w-full">
                        <CalendarDaysIcon className="w-6 h-6 absolute right-3.5 top-4 z-10 text-white" 
                        onClick={() => endRef.current?.setOpen(true)}  />
                        <DatePicker onChange={date => handleDateChange(date?.toDateString() || "", setEndDate)}
                            className="p-4 w-full placeholder:text-white outline-none rounded-md bg-gray-border text-light-black pr-10"
                            placeholderText="Custom" value={endDate} />
                    </div>
                </div>
            </div>
        </CreateNewProposalAppShell>
    )
}