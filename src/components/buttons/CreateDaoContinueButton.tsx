/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createDaoStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep, daoDescriptionAtom, daoNameAtom, daoLogoUrlAtom, selectedBlockchainName, linkFieldsAtom, daoLinksAtom, currencyAtom, followAmountAtom, fundsRecipientAtom } from "atoms/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function CreateDaoNContinueButton() {
    const [disabled, setDisabled] = useState(true)
    const step = useRecoilValue(createDaoStep)
    const blockchainName = useRecoilValue(selectedBlockchainName)
    const daoName = useRecoilValue(daoNameAtom)
    const daoDescription = useRecoilValue(daoDescriptionAtom)
    const daoLogo = useRecoilValue(daoLogoUrlAtom)
    const daoLinks = useRecoilValue(linkFieldsAtom)
    const [links, setLinks] = useRecoilState(daoLinksAtom)
    const currency = useRecoilValue(currencyAtom)
    const followAmount = useRecoilValue(followAmountAtom)
    const fundsRecipient = useRecoilValue(fundsRecipientAtom)
    const router = useRouter()
    useEffect(() => {
        switch (step) {
            case 1:
                if (blockchainName == "") {
                    setDisabled(true)
                }
                else {
                    setDisabled(false);
                }
                break;
            case 2:
                //setLinks(daoLinks.filter(link => link.removed == false))
                setLinks(daoLinks.filter(link => link.removed == false && link.name != "" && link.url != ""))
                if (daoName == "" || daoDescription == "") {
                    setDisabled(true)
                }
                else {
                    setDisabled(false)
                }
                break;
            case 3:
                if (currency != "" && followAmount != "" && fundsRecipient != "") {
                    setDisabled(false)
                }
                else {
                    setDisabled(true)
                }
                break;
            default:
                setDisabled(true)
                break;
        }
    }, [blockchainName, step, daoLinks, daoDescription, daoName, currency, followAmount, fundsRecipient, setLinks])
    //() => step + 1 !== 5 && step < 3 ? router.push(createDaoStepNavigation[step] || "") : router.push(createDaoStepNavigation[step+1] || "")
    return (
        <Button onClick={() => step + 1 !== 5 && router.push(createDaoStepNavigation[step] || "")}
            className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>Continue</Button>
    )
}