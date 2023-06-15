/* eslint-disable @typescript-eslint/no-misused-promises */
import { newProposalStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep, proposalDescription, proposalLinkFieldsAtom, proposalLinks, proposalTitle } from "atoms/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function NewProposalContinueButton() {
    const [disabled, setDisabled] = useState(true)
    const step = useRecoilValue(createDaoStep)
    const title = useRecoilValue(proposalTitle)
    const description = useRecoilValue(proposalDescription)
    const linkFields = useRecoilValue(proposalLinkFieldsAtom)
    const [links, setLinks] = useRecoilState(proposalLinks)
    const [finish, setFinish] = useState(false)
    const router = useRouter()
    useEffect(() => {
        switch (step) {
            case 1:
                if (title != "" && description != "") {
                    setLinks(linkFields.filter(link => link.removed == false && link.name != "" && link.url != "").map(link => {
                        return { name: link.name, url: link.url }
                    }))
                    setDisabled(false)
                }
                else {
                    setDisabled(true)
                }
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                setDisabled(true)
                break;
        }
    }, [description, linkFields, setLinks, step, title])
    //() => step + 1 !== 5 && step < 3 ? router.push(createDaoStepNavigation[step] || "") : router.push(createDaoStepNavigation[step+1] || "")
    return (
        <Button onClick={() => step + 1 !== 5 && router.push(newProposalStepNavigation[step] || "")}
            className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>
            {finish ? "Create Dao" : "Continue"}
        </Button>
    )
}