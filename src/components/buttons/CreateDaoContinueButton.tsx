/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createDaoStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep, daoDescriptionAtom, daoNameAtom, daoLogoUrlAtom, selectedBlockchainName, linkFieldsAtom, daoLinksAtom } from "atoms/atoms";
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
    const [, setLinks] = useRecoilState(daoLinksAtom)
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
                setLinks(daoLinks.filter(link => link.removed == false))
                if (daoName == "" || daoDescription == "") {
                    setDisabled(true)
                }
                else {
                    setDisabled(false)
                }
                break;
            default:
                setDisabled(true)
                break;
        }
    }, [blockchainName, step, daoLinks, daoDescription, daoName, setLinks])
    return (
        <Button onClick={() => step + 1 !== 5 && router.push(createDaoStepNavigation[step] || "")}
            className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>Continue</Button>
    )
}