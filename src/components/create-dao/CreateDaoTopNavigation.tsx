import { Web3Button } from "@web3modal/react";

export default function CreateDaoTopNavigation() {
    return (
        <div className="flex items-center justify-between text-white">
            <div className="flex-1 flex justify-between">
                <div />
                <div className="flex justify-end z-20">
                    <Web3Button />
                </div>
            </div>
        </div>
    )
}