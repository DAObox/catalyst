// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unsafe-call */

import { type Dispatch, type SetStateAction } from "react";
import { type SetterOrUpdater } from "recoil";
import { type LinkFieldType } from "typings/typings";

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