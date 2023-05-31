/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";


function Icon({ id, open }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"

            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function DaoAccordion() {

    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div>
            <Fragment>
                <Accordion open={open === 1} icon={
                    <ChevronDownIcon className={`${!open && "rotate-180"} h-5 w-5 transition-transform text-white`} />
                }>
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-0">
                    <p className="text-white text-base">Token Info</p>
                </AccordionHeader>
                <AccordionBody>
                    <div className="h-20 w-full border border-white/50 rounded-xl flex justify-center p-5 space-x-14">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-fit flex items-center space-x-1">
                                <div>
                                    <p className="text-lg font-medium text-light-black">Total Supply</p>
                                </div>
                                <div>
                                    <QuestionMarkCircleIcon className="h-5 w-5 text-white hover:cursor-pointer" />
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-xl">10,000,0000</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-fit flex items-center space-x-1">
                                <div>
                                    <p className="text-lg font-medium text-light-black">ENS Price</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-xl">$2.01</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-fit flex items-center space-x-1">
                                <div>
                                    <p className="text-lg font-medium text-light-black">Total Minted</p>
                                </div>
                                <div>
                                    <QuestionMarkCircleIcon className="h-5 w-5 text-white hover:cursor-pointer" />
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-xl">400,0000</p>
                            </div>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
        </Fragment>
        </div >
    )
}