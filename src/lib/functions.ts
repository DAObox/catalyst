// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unsafe-call */

import { type Dispatch, type SetStateAction } from "react";
import { type SetterOrUpdater } from "recoil";
import { type CreateDaoType, type DaoLinkType, type LinkFieldType } from "typings/typings";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function truncate(str: string, length: number) {
    return str.length > length ? str.slice(0, length) + '...' : str;
}

export function truncateAddress(address: string) {
    return address.substring(0, 6) + "..." + address.substring(address.length - 6, address.length)
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const handleCreateNewField = (linksField: LinkFieldType[], setLinksField: SetterOrUpdater<LinkFieldType[]>) => {
    const newField = [...linksField]
    newField.push({ name: "", url: "", removed: false })
    setLinksField(newField)
}

export const handleRemoveLink = (linksField: LinkFieldType[], index: number, setLinksField: SetterOrUpdater<LinkFieldType[]>) => {
    const newLinkFields = [...linksField];
    newLinkFields[index] = { name: "", url: "", removed: true };
    setLinksField(newLinkFields);
};

export const handleInputTypeNameChange = (e: React.ChangeEvent<HTMLInputElement>,
    linksField: LinkFieldType[], index: number, setLinksField: SetterOrUpdater<LinkFieldType[]>, setInputValue: Dispatch<SetStateAction<string | undefined>>) => {
    const newLinkFields = [...linksField]
    const nameInput = document.getElementById(`${index}-name`) as HTMLInputElement;
    const urlInput = document.getElementById(`${index}-link`) as HTMLInputElement;
    newLinkFields[index] = { name: nameInput?.value, url: urlInput?.value, removed: false }
    setLinksField(newLinkFields)
    setInputValue(e.target.value);
};

export const handleInputTypeUrlChange = (e: React.ChangeEvent<HTMLInputElement>,
    linksField: LinkFieldType[], index: number, setLinksField: SetterOrUpdater<LinkFieldType[]>, setInputValue: Dispatch<SetStateAction<string | undefined>>) => {
    const newLinkFields = [...linksField]
    const nameInput = document.getElementById(`${index}-name`) as HTMLInputElement;
    const urlInput = document.getElementById(`${index}-link`) as HTMLInputElement;
    newLinkFields[index] = { name: nameInput?.value, url: urlInput?.value, removed: false }
    setLinksField(newLinkFields)
    setInputValue(e.target.value);
};

export const getCurrency = (blockchain: string, setCurrency: SetterOrUpdater<string>) => {
    switch (blockchain) {
        case "Ethereum":
            setCurrency("ETH")
            return "ETH"
        case "Polygon":
            setCurrency("MATIC")
            return "MATIC"
        case "Mumbai":
            setCurrency("MATIC")
            return "MATIC"
        case "Goerli":
            setCurrency("GETH")
            return "GETH"
        default:
            setCurrency("")
            return ""
    }
}

export const getCurrencyLogo = (blockchain: string) => {
    switch (blockchain) {
        case "Ethereum":
            return "/logos/ethereum.png"
        case "Polygon":
            return "/logos/polygon.png"
        case "Mumbai":
            return "/logos/polygon.png"
        case "Goerli":
            return "/logos/ethereum.png"
        default:
            return ""
    }
}

export function setCreateDaoData(blockchainName: string, daoName: string, daoDescription: string, daoLogo: string, links: DaoLinkType[],
    currency: string, followAmount: string, fundsRecipient: string, quorum: number, minimumParticipation: number, days: number,
    hours: number, minutes: number, earlyExecution: string, voteChange: string, blockchainType: string, setCreateDao: SetterOrUpdater<CreateDaoType>) {
    const createDaoData: CreateDaoType = {
        blockchainName: "",
        blockchainType: "mainnet",
        daoName: "",
        description: "",
        logo: "",
        links: [{
            name: "",
            url: ""
        }],
        followSettings: {
            currency: "",
            followAmount: 0,
            receipient: ""
        },
        governanceSettings: {
            quorum: 0,
            minimumParticipation: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            earlyExecution: "",
            voteChange: ""
        }
    }
    createDaoData.blockchainName = blockchainName
    createDaoData.blockchainType = blockchainType
    createDaoData.daoName = daoName
    createDaoData.description = daoDescription
    createDaoData.logo = daoLogo
    createDaoData.links = links
    createDaoData.followSettings.currency = currency
    createDaoData.followSettings.followAmount = Number(followAmount)
    createDaoData.followSettings.receipient = fundsRecipient
    createDaoData.governanceSettings.quorum = quorum
    createDaoData.governanceSettings.minimumParticipation = (minimumParticipation / 100) * 100000
    createDaoData.governanceSettings.days = days
    createDaoData.governanceSettings.hours = hours
    createDaoData.governanceSettings.minutes = minutes
    createDaoData.governanceSettings.earlyExecution = earlyExecution
    createDaoData.governanceSettings.voteChange = voteChange
    setCreateDao(createDaoData)
    console.log(createDaoData)
}

export function getDaoId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get('id') || "";
}