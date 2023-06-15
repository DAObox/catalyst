import { Web3Button } from "@web3modal/react";

export default function DaoTopNavigation() {
    return (
        <div className="flex items-center justify-end text-white">
            <div className="flex justify-end z-20">
                <Web3Button />
            </div>
        </div>
    )
}