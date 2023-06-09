/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { SetterOrUpdater } from "recoil";

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

export function createLinkField(initial: number, setLinkFields: SetterOrUpdater<number>) {
    initial += 1
    console.log(initial)
    const parent = document.createElement("div")
    parent.className = "flex items-center space-x-1.5"
    parent.id = `${initial}-parent`
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.className = "w-48 p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
    nameInput.placeholder = "Name"
    nameInput.id = `${initial}-name`
    const linkInput = document.createElement("input")
    linkInput.type = "text"
    linkInput.className = "w-full p-4 mt-2 bg-dark-gray rounded-lg bg-transparent border border-gray-border outline-none placeholder:text-medium-gray"
    linkInput.placeholder = "Link"
    linkInput.id = `${initial}-link`
    const deleteButton = document.createElement("button")
    const trashIcon: any = document.createElement("img")
    trashIcon.className = "w-6 h-5"
    trashIcon.src = "/trash.png"
    trashIcon.alt = "trash icon"
    trashIcon.id = `${initial}`
    trashIcon.addEventListener("click", (e: { target: { id: any } }) => {
        document.getElementById(`${e.target.id}-parent`)?.remove()
    })
    deleteButton.appendChild(trashIcon)
    parent.appendChild(nameInput)
    parent.appendChild(linkInput)
    parent.appendChild(deleteButton)
    document.getElementById("link-parent")?.appendChild(parent)
    setLinkFields(initial)
}