import { atom } from "recoil";

export const chainAtom = atom({
    key: "chainAtom",
    default: "Ethereum"
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})

export const filterProposalsAtom = atom({
    key: "filterProposalsAtom",
    default: ""
})

export const daoFilterDropDown = atom({
    key: "daoFilterDropDown",
    default: ""
})