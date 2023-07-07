import { handleRemoveLink } from "@/lib/functions";
import { TrashIcon } from "@heroicons/react/24/solid";
import { proposalLinkFieldsAtom } from "atoms/atoms";
import { useRecoilState } from "recoil";
import LinkNameInput from "@/components/dao/create-dao/LinkNameInput";
import LinkUrlInput from "@/components/dao/create-dao/LinkUrlInput";
import { type LinkFieldProps } from "typings/typings";

export default function ProposalLinkField({ index, name, url }: LinkFieldProps) {
  const [linksField, setLinksField] = useRecoilState(proposalLinkFieldsAtom);
  return (
    <div className="flex w-full items-center space-x-5">
      <LinkNameInput
        placeholder="Name/Description"
        className="w-full"
        value={name}
        index={index}
        linksField={linksField}
        setLinksField={setLinksField}
      />
      <LinkUrlInput
        placeholder="Links"
        className="w-full"
        value={url}
        index={index}
        linksField={linksField}
        setLinksField={setLinksField}
      />
      <button onClick={() => handleRemoveLink(linksField, index, setLinksField)}>
        <TrashIcon className="h-6 w-6 text-light-gray" />
      </button>
    </div>
  );
}
