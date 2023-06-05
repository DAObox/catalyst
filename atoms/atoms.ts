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

export const memberFilterDropDown = atom({
    key: "memberFilterDropDown",
    default: ""
})

export const listStyleAtom = atom({
    key: "listStyleAtom",
    default: "grid"
})

export const currentTabDetail = atom({
    key: "currentTabDetail",
    default: "activity"
})

export const voteAtom = atom({
    key: "vote",
    default: ""
})