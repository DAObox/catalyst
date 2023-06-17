/* eslint-disable @typescript-eslint/no-misused-promises */
import { newProposalStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createProposalAmountAtom, createProposalRecepientAtom, createProposalStepAtom, currencyAtom, endDateAtom, proposalDescription, proposalLinkFieldsAtom, proposalLinks, proposalTitle, proposalVotingControlAtom, selectCurrencyAtom, startDateAtom } from "atoms/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function NewProposalContinueButton() {
    const [disabled, setDisabled] = useState(true)
    const step = useRecoilValue(createProposalStepAtom)
    const title = useRecoilValue(proposalTitle)
    const description = useRecoilValue(proposalDescription)
    const linkFields = useRecoilValue(proposalLinkFieldsAtom)
    const [links, setLinks] = useRecoilState(proposalLinks)
    const proposalVoteControl = useRecoilValue(proposalVotingControlAtom)
    const startDate = useRecoilValue(startDateAtom)
    const endDate = useRecoilValue(endDateAtom)
    const start = useRecoilValue(startDateAtom)
    const end = useRecoilValue(endDateAtom)
    const token = useRecoilValue(selectCurrencyAtom)
    const [finish, setFinish] = useState(false)
    const currency = useRecoilValue(selectCurrencyAtom)
    const recepient = useRecoilValue(createProposalRecepientAtom)
    const amount = useRecoilValue(createProposalAmountAtom)
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
                if (startDate != "" && endDate != "") {
                    setDisabled(false)
                }
                else {
                    setDisabled(true)
                }
                break;
            case 3:
                setDisabled(false)
                break;
            case 4:
                setDisabled(false)
                setFinish(true)
                break;
            default:
                setDisabled(true)
                break;
        }
    }, [amount, currency, description, endDate, linkFields, recepient, setLinks, startDate, step, title])
    return (
        <Button onClick={() => step + 1 !== 5 ? router.push(newProposalStepNavigation[step] || "") : console.log({
            title: title,
            description: description,
            links: links,
            votingType: proposalVoteControl,
            startDate: start,
            endDate: end,
            token: token,
            amount: amount,
            recepient: recepient
        })}
            className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>
            {finish ? "Create Dao" : "Continue"}
        </Button>
    )
}