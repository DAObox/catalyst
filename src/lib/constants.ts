/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowTrendingUpIcon, FolderIcon, UsersIcon } from "@heroicons/react/24/solid"

export const chains = [
    { id: "137", label: "Matic", icon: "/logos/polygon.png" },
    { id: "138", label: "Mumbai", icon: "/logos/polygon.png" },
]

export const defaultFilters = [
    {
        id: "1",
        label: "Filter",
        icon: "/logos/sort.png"
    }
]

export const filters = [
    {
        id: "1",
        label: "Ascending"
    },
    {
        id: "2",
        label: "Descending"
    },
    {
        id: "3",
        label: "Volume"
    },
    {
        id: "4",
        label: "Market Cap"
    }
]

export function memberTabs(currentTab: string) {
    return [
        { name: 'Activity', icon: ArrowTrendingUpIcon, current: currentTab === 'activity' },
        { name: 'Proposals', icon: FolderIcon, current: currentTab === 'proposals' },
        { name: 'Delegates', icon: UsersIcon, current: currentTab === 'delegates' },
    ]
}

export function votersTab(tab: string) {
    return [
        { name: 'For', current: tab === 'for' },
        { name: 'Against', current: tab === 'against' },
        { name: 'Abstain', current: tab === 'abstain' },
    ]
}

export const createDaoStepNavigation = [
    "/create-dao/select-blockchain",
    "/create-dao/about-dao",
    "/create-dao/connect-lens-profile",
    "/create-dao/governance",
    "/create-dao/setup-superflow",
]