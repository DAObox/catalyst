/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createDaoStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep, daoDescriptionAtom, daoNameAtom, daoLogoUrlAtom, numberOfLinkFields, selectedBlockchainName, linkFieldsAtom } from "atoms/atoms";
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
    const numberOfLinks = useRecoilValue(numberOfLinkFields)
    const [, setLinkFields] = useRecoilState(linkFieldsAtom)
    const router = useRouter()
    useEffect(() => {
        const links = []
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
                for (let i = 0; i < numberOfLinks; i++) {
                    const nameField: any = document.getElementById(`${i}-name}`)
                    const linkField: any =document.getElementById(`${i}-link}`)
                    // {/* Only collect those link fields with at least a name or a url or both */}
                    // if (nameField?.value !== undefined || linkField?.value !== undefined) {
                    //     links.push({ name: nameField?.value, url: linkField?.value })
                    //     setLinkFields(links)
                    // }
                }
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
    }, [blockchainName, step, numberOfLinks, daoDescription, daoName, setLinkFields])
    return (
        <Button onClick={() => step + 1 !== 5 && router.push(createDaoStepNavigation[step] || "")}
            className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>Continue</Button>
    )
}