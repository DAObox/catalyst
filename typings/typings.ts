export interface CustomOptionsProps {
    label: string,
    icon: string,
}

export interface DaoCardProps {
    href: string
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
    className?: string
    currentPage: string
    icon?: string,
}

export interface BreadDividerProps {
    className?: string
}

export interface DaoSelectNavigationProps {
    currentPage: string
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

export interface LinkFieldProps {
    index: number,
    name: string,
    url: string,
}

export interface LinkFieldType {
    name: string,
    url: string,
    removed: boolean
}

export interface BlockchainBlockProps {
    name: string
}

export interface LinkInputType {
    className: string,
    value?: string,
    placeholder?: string,
    index: number
}

export interface RangeIndicatorProps {
    max: number,
    min: number
}

export interface DaoLinkType {
    name: string,
    url: string
}

export interface CreateDaoType {
    blockchainName: string;
    blockchainType: string;
    daoName: string;
    description: string;
    logo: string;
    links: {
        name: string;
        url: string;
    }[];
    followSettings: {
        currency: string;
        followAmount: number;
        receipient: string;
    };
    governanceSettings: {
        quorum: number,
        minimumParticipation: number,
        days: number,
        hours: number,
        minutes: number,
        earlyExecution: string,
        voteChange: string
    };
}