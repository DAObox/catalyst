import CreateNewProposalAppShell from "@/components/create-proposals/CreateNewProposalAppShell";
import { handleCreateNewField } from "@/lib/functions";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { proposalLinkFieldsAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";
import ProposalLinkField from "../../components/create-proposals/ProposalLinkField";
import InputTypeTitle from "@/components/dao/InputTypeTitle";
import InputTypeDescription from "@/components/dao/InputTypeDescription";

export default function CreateProposal() {
    const [linksField, setLinksField] = useRecoilState(proposalLinkFieldsAtom)
    return (
        <CreateNewProposalAppShell className="space-y-6">
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Title</h2>
                <InputTypeTitle />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Description</h2>
                <InputTypeDescription />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-medium text-lighter-gray">Resources</h2>
                <p className="text-light-black">Share external resources here.</p>
                {
                    linksField.map((linkField, index) => (
                        linkField.removed == false && <ProposalLinkField name={linkField.name} url={linkField.url} index={index} key={index} />
                    ))
                }
            </div>
            <Button
                onClick={() => handleCreateNewField(linksField, setLinksField)}
                className="flex items-center space-x-1 bg-gray">
                <span>Add More</span> <PlusIcon className="w-5 h-5" />
            </Button>
        </CreateNewProposalAppShell>
    )
}