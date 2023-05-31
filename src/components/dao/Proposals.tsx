import { Button } from "@material-tailwind/react";
import Divider from "../Divider";
import ProposalsCards from "./ProposalCards";

export default function Proposals() {
    return(
        <div className="w-full space-y-5">
            <div className="w-full flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-medium text-white">Proposals</h2>
                </div>
                <div>
                    <Button className="bg-green px-5 py-4 rounded-xl text-white flex items-center gap-3">Create Proposals</Button>
                </div>
            </div>
            <div>
                <Divider />
            </div>
            <div className="space-y-4">
                <ProposalsCards />
                <ProposalsCards />
                <ProposalsCards />
                <ProposalsCards />
                <ProposalsCards />
                <ProposalsCards />
            </div>
        </div>
    )
}