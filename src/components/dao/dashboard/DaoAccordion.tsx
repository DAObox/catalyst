/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Tooltip } from "@material-tailwind/react";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export default function DaoAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Fragment>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              className={`${!open && "rotate-180"} h-5 w-5 text-white transition-transform`}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(1)} className="border-0">
            <p className="text-base text-white">Token Info</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex h-20 w-full justify-center space-x-14 rounded-xl border border-white/50 p-5">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-fit items-center space-x-1">
                  <div>
                    <p className="text-lg font-medium text-light-black">Total Supply</p>
                  </div>
                  <div>
                    <Tooltip content="More Information">
                      <QuestionMarkCircleIcon className="h-5 w-5 text-white hover:cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">10,000,0000</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-fit items-center space-x-1">
                  <div>
                    <p className="text-lg font-medium text-light-black">ENS Price</p>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">$2.01</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-fit items-center space-x-1">
                  <div>
                    <p className="text-lg font-medium text-light-black">Total Minted</p>
                  </div>
                  <div>
                    <Tooltip content="More Information">
                      <QuestionMarkCircleIcon className="h-5 w-5 text-white hover:cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">400,0000</p>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
