import { Web3Button } from "@web3modal/react";

export default function CreateDaoTopNavigation() {
  return (
    <div className="flex items-center justify-between text-white">
      <div className="flex flex-1 justify-between">
        <div />
        <div className="z-20 flex justify-end">
          <Web3Button />
        </div>
      </div>
    </div>
  );
}
