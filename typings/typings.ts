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

export interface VoteHorizontalRangeProps {
    _for: number,
    against: number,
    abstain: number
}

export interface VotersTabProps {
    tab: { name: string, current: boolean }
}

export interface DaoAppShellProps {
    children: React.ReactNode,
    currentPage?: string
    className?: string
}

export interface CreateDaoPageStatusProps {
    page: number,
}

export interface CreateDaoStepProps {
    current: boolean
}

export interface CreateDaoPageStatusRangeProps {
    page: number
}

export interface LinkFieldId {
    id: number
}

export interface LinkFieldType {
    name: string,
    url: string,
    removed: boolean
}

export interface BlockchainBlockProps {
    name: string
}