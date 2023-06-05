export interface CustomOptionsProps {
    label: string,
    icon: string,
}

export interface DaoCardProps {
    href: string
}

export interface DaoTopNavigationProps {
    active: string
}

export interface DaoAccordionProps {
    totalSupply: number,
    price: number,
    numberMinted: number
}

export interface MembeStatProps {
    balance: string,
    power: string
}

export interface VotingPowerProps {
    power: string
}

export interface TokenBalanceProps {
    balance: string
}

export interface LastTransactionItemProps {
    type: string
}

export interface CopyButtonProps {
    data: string
}

export interface GovernanceStatusItemProps {
    date: string,
    type: string
}