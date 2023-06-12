/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { createDaoStepNavigation } from "@/lib/constants";
import { Button } from "@material-tailwind/react";
import { createDaoStep, daoDescriptionAtom, daoNameAtom, daoLogoUrlAtom, selectedBlockchainName, linkFieldsAtom, daoLinksAtom, currencyAtom, followAmountAtom, fundsRecipientAtom, quorumAtom, minimumParticipationControlAtom, daysAtom, hoursAtom, minutesAtom, earlyExecutionAtom, voteChangeAtom, createDaoAtom } from "atoms/atoms";
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
    const quorum = useRecoilValue(quorumAtom)
    const minimumParticipation = useRecoilValue(minimumParticipationControlAtom)
    const days = useRecoilValue(daysAtom)
    const hours = useRecoilValue(hoursAtom)
    const minutes = useRecoilValue(minutesAtom)
    const earlyExecution = useRecoilValue(earlyExecutionAtom)
    const voteChange = useRecoilValue(voteChangeAtom)
    const router = useRouter()
    const [finish, setFinish] = useState(false)
    const [createDao, setCreateDao] = useRecoilState(createDaoAtom)
    const createDaoData: any = {}
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
            case 4:
                if (quorum != 0 && minimumParticipation != 0 && days != 0 && hours != 0 && minutes != 0 && earlyExecution != "" && voteChange != "") {
                    setDisabled(false)
                    setFinish(true)
                }
                else {
                    setDisabled(true)
                    setFinish(false)
                }
                break;
            default:
                setDisabled(true)
                break;
        }
    }, [blockchainName, step, daoLinks, daoDescription, daoName, currency, followAmount, fundsRecipient,
        quorum, minimumParticipation, days, hours, minutes, earlyExecution, voteChange, setLinks])
    //() => step + 1 !== 5 && step < 3 ? router.push(createDaoStepNavigation[step] || "") : router.push(createDaoStepNavigation[step+1] || "")
    function setCreateDaoData() {
        createDaoData.blockchainName = blockchainName
        createDaoData.daoName = daoName
        createDaoData.daoDescription = daoDescription
        createDaoData.daoLogo = daoLogo
        createDaoData.daoLinks = links
        createDaoData.currency = currency
        createDaoData.followAmount = followAmount
        createDaoData.fundsRecipient = fundsRecipient
        createDaoData.quorum = quorum
        createDaoData.minimumParticipation = (minimumParticipation/100) * 100000
        createDaoData.days = days
        createDaoData.hours = hours
        createDaoData.minutes = minutes
        createDaoData.earlyExecution = earlyExecution
        createDaoData.voteChange = voteChange
        setCreateDao(createDaoData)
        console.log(createDao)
    }
    return (
        <Button onClick={() => step + 1 !== 5 ? router.push(createDaoStepNavigation[step] || "") : setCreateDaoData()}
        className="bg-green px-5 py-3.5 rounded-xl text-lighter-gray flex items-center gap-3" disabled={disabled}>
            { finish ? "Create Dao" : "Continue"}
        </Button>
    )
}