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

export function tabs(currentTab: string) {
    return [
        { name: 'Activity', icon: ArrowTrendingUpIcon, current: currentTab === 'activity' },
        { name: 'Proposals', icon: FolderIcon, current: currentTab === 'proposals' },
        { name: 'Delegates', icon: UsersIcon, current: currentTab === 'delegates' },
    ]
}