/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Tooltip } from "@material-tailwind/react";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export default function CreateDaoAccordion() {
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
            <p className="text-base font-medium text-white">Instruction</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex h-20 w-full justify-center space-x-14 rounded-xl border border-white/50 p-5">
              Choose a Blockchain Platform: Select a suitable blockchain platform. Define the
              Purpose and Scope: Determine the objectives and scope of your DAO. Connect Profile:
              Assign your dao profile. Governance Mechanism: Create a framework for voting,
              proposals, and decision-making.
            </div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
