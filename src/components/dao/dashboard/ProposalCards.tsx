import { truncate, truncateAddress } from "@/lib/functions";
import { Button } from "@material-tailwind/react";

/* eslint-disable react/jsx-no-undef */
export default function ProposalsCards() {
  return (
    <div
      className="custom-card card w-full space-y-2.5 rounded-xl 
        bg-gray px-2 py-4 shadow-xl md:p-4"
    >
      <div>
        <h1 className="text-lg font-medium text-white">Campaign</h1>
      </div>
      <div>
        <p className="text-lg text-white">
          {truncate(
            "The Ethereum Name Service (ENS) is a distrubuted, Open, and extensible naming system based on the...",
            100
          )}
        </p>
      </div>
      <div className="mt-5 flex w-full items-center justify-between rounded-lg">
        <p className="text-base text-light-gray">Proposed on: 24th May, 2023</p>
        <p className="text-base text-light-gray">
          Published by:{" "}
          <span className="text-green">
            {truncateAddress("0x4b75F7F56d10D898822A4F2B99b08EF40e5BF7C8")}
          </span>
        </p>
        <p className="space-x-2.5 text-base text-light-gray">
          <Button className="bg-trans-blue text-blue shadow-none">Active</Button>
          <Button className="shaow-none bg-trans-yellow text-yellow">Withdrawal</Button>
        </p>
      </div>
    </div>
  );
}
