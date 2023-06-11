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

export const voteTabAtom = atom({
    key: "voteTab",
    default: "for"
})

export const createDaoStep = atom({
    key: "createDaoStep",
    default: 1
})

export const selectBlockchainTab = atom({
    key: "selectBlockchainTab",
    default: "mainnet"
})

export const selectedBlockchainName = atom({
    key: "selectedBlockchainName",
    default: ""
})

export const daoNameAtom = atom({
    key: "daoName",
    default: ""
})

export const daoDescriptionAtom = atom({
    key: "daoDescriptionAtom",
    default: ""
})

export const daoLogoLocalUrlAtom = atom({
    key: "daoLogoLocalUrlAtom",
    default: ""
})

export const daoLogoUrlAtom = atom({
    key: "daoLogoUrlAtom",
    default: ""
})

export const linkFieldsAtom = atom({
    key: "linkFieldAtom",
    default: [{ name: "", url: "", removed: false }]
})

export const daoLinksAtom  = atom({
    key: "daoLinksAtom",
    default: [{ name: "", url: "" }]
})

export const createDaoAtom = atom({
    key: "createDaoAtom",
    default: {
        name: "",
        description: "",
        logo: "",
        followSettings: {
            currency: "",
            followAmount: 0,
            receipient: ""
        },
        links: [
            {
                name: "",
                url: ""
            }
        ]
    }
})