/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { type Dispatch, type SetStateAction } from "react";
import { type SetterOrUpdater } from "recoil";
import { type LinkFieldType } from "typings/typings";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function truncate(str: string, length: number) {
    return str.length > length? str.slice(0, length) + '...' : str;
}

export function truncateAddress(address: string) {
    return address.substring(0, 6) + "..." + address.substring(address.length-6, address.length)
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const handleInputTypeTextChange = (e: React.ChangeEvent<HTMLInputElement>, 
    linksField: LinkFieldType[], index: number, setLinksField: SetterOrUpdater<LinkFieldType[]>, setInputValue: Dispatch<SetStateAction<string | undefined>>) => {
    const newLinkFields: any = [...linksField]
    const nameInput = document.getElementById(`${index}-name`) as HTMLInputElement;
    const urlInput = document.getElementById(`${index}-link`) as HTMLInputElement;
    newLinkFields[index] = { name: nameInput?.value, url: urlInput?.value, removed: false }
    setLinksField(newLinkFields)
    setInputValue(e.target.value);
    // console.log(newLinkFields)
};

// export function createLinkField(initial: number, setLinkFields: SetterOrUpdater<LinkFieldType[]>, linkFields: LinkFieldType[]) {
//     initial += 1
//     const parent = document.createElement("div")
//     parent.className = "flex items-center space-x-1.5"
//     parent.id = `${initial}-parent`
//     const nameInput = document.createElement("input")
//     nameInput.type = "text"
//     nameInput.className = "w-48 p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
//     nameInput.placeholder = "Name"
//     nameInput.id = `${initial}-name`
//     const linkInput = document.createElement("input")
//     linkInput.type = "text"
//     linkInput.className = "w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
//     linkInput.placeholder = "Link"
//     linkInput.id = `${initial}-link`
//     const deleteButton = document.createElement("button")
//     const trashIcon: any = document.createElement("img")
//     trashIcon.className = "w-6 h-5"
//     trashIcon.src = "/trash.png"
//     trashIcon.alt = "trash icon"
//     deleteButton.id = `${initial}`
//     deleteButton.appendChild(trashIcon)
//     parent.appendChild(nameInput)
//     parent.appendChild(linkInput)
//     parent.appendChild(deleteButton)
//     document.getElementById("link-parent")?.appendChild(parent)
//     const domLinkInput = document.getElementById(`${initial}-link`) as HTMLInputElement
//     const domNameInput = document.getElementById(`${initial}-name`) as HTMLInputElement
//     deleteButton.addEventListener("click", () => {
//         const newLinkFields = [...linkFields]
//         newLinkFields[initial-1] = { name: domNameInput.value, url: domLinkInput.value, removed: true }
//         setLinkFields(newLinkFields)
//         document.getElementById(`${initial}-parent`)?.remove()
//     })
//     domNameInput?.addEventListener("change", () => {
//         const newLinkFields = [...linkFields]
//         newLinkFields[initial-1] = { name: domNameInput.value, url: domLinkInput.value, removed: false }
//         setLinkFields(newLinkFields)
//     })
//     domLinkInput?.addEventListener("change", () => {
//         const newLinkFields = [...linkFields]
//         newLinkFields[initial-1] = { name: domNameInput.value, url: domLinkInput.value, removed: false }
//         setLinkFields(newLinkFields)
//     })
// }