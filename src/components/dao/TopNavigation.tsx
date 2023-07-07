import { Web3Button } from "@web3modal/react";

export default function TopNavigation() {
  return (
    <div className="flex items-center justify-end text-white">
      <div className="z-20 flex justify-end">
        <Web3Button />
      </div>
    </div>
  );
}
