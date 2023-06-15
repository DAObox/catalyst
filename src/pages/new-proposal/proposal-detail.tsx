/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-function */
import RadioInput from "@/components/RadioInput";
import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { createProposalStepAtom } from "atoms/atoms";
import { type RefObject, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function CreateProposal() {
    const [, setStep] = useRecoilState(createProposalStepAtom)
    const [date, setDate] = useState<Date>()
    setStep(2)
    const ref: RefObject<any> = useRef(null)
    const handleDateChange = (date: Date) => {
        setDate(date)
    }
    return (
        <CreateNewProposalAppShell className="space-y-6">
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Voting</h2>
                <RadioInput placeholder="Yes, No, or Abstain" customFunction={() => { }} className="bg-gray-border p-4" />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Voting</h2>
                <p className="text-light-black">Specify the commencement and conclusion of a proposal.</p>
                <div className="flex w-full space-x-5">
                    <RadioInput placeholder="Now" className="w-full bg-gray-border p-4" customFunction={() => { }} />
                    <div className="relative w-full">
                        <CalendarDaysIcon className="w-6 h-6 absolute right-3.5 top-4 z-10 text-white" />
                        <DatePicker ref={ref} onChange={handleDateChange} className="p-4 w-full placeholder:text-white outline-none rounded-md
                    bg-gray-border text-light-black pr-10" placeholderText="Custom" value={date?.toDateString()} />
                    </div>
                </div>
            </div>
        </CreateNewProposalAppShell>
    )
}

//<CustomDateInput placeholder="Custom" className="w-full bg-gray-border p-4" customFunction={() => ref.current.setOpen(true)} />