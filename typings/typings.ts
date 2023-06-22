import { type DaoMetadata, type IPluginInstallItem } from "@aragon/sdk-client";
import {
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { type SetterOrUpdater } from "recoil";

export interface CustomOptionsProps {
  label: string;
  icon: string;
}

export interface DaoCardProps {
  href: string;
}

export interface DaoAccordionProps {
  totalSupply: number;
  price: number;
  numberMinted: number;
}

export interface MembeStatProps {
  balance: string;
  power: string;
}

export interface VotingPowerProps {
  power: string;
}

export interface TokenBalanceProps {
  balance: string;
}

export interface LastTransactionItemProps {
  type: string;
}

export interface CopyButtonProps {
  data: string;
}

export interface GovernanceStatusItemProps {
  date: string;
  type: string;
}

export interface VoteHorizontalRangeProps {
  _for: number;
  against: number;
  abstain: number;
}

export interface VotersTabProps {
  tab: { name: string; current: boolean };
}

export interface DaoAppShellProps {
  children: React.ReactNode;
  className?: string;
  currentPage?: string;
  icon?: string;
}

export interface BreadDividerProps {
  className?: string;
}

export interface DaoSelectNavigationProps {
  currentPage: string;
}

export interface CreateDaoPageStatusProps {
  page: number;
}

export interface StepProps {
  current: boolean;
}

export interface CreateDaoPageStatusRangeProps {
  page: number;
}

export interface LinkFieldProps {
  index: number;
  name: string;
  url: string;
}

export interface LinkFieldType {
  name: string;
  url: string;
  removed: boolean;
}

export interface BlockchainBlockProps {
  name: string;
  icon: string;
}

export interface LinkInputType {
  className: string;
  value?: string;
  placeholder?: string;
  index: number;
  linksField: LinkFieldType[];
  setLinksField: SetterOrUpdater<LinkFieldType[]>;
}

export interface RangeIndicatorProps {
  max: number;
  min: number;
}

export interface DaoLinkType {
  name: string;
  url: string;
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
    quorum: number;
    minimumParticipation: number;
    days: number;
    hours: number;
    minutes: number;
    earlyExecution: string;
    voteChange: string;
  };
}

export interface DashnoardPageProps {
  icon: string;
}

export interface BlockProps {
  text?: string;
  className?: string;
  url?: string;
}

export interface DaoOnSideProps {
  url: string;
  id: string;
}

export interface RadioInputProps {
  placeholder: string;
  customFunction: () => void;
  className?: string;
  checked: boolean;
}

export interface DatePickerProps {
  className?: string;
}

export type QueryConfig<TData, TSelectData = TData> = Pick<
  UseQueryOptions<TData, unknown, TSelectData>,
  | "cacheTime"
  | "enabled"
  | "staleTime"
  | "suspense"
  | "onError"
  | "onSettled"
  | "onSuccess"
  | "queryKey"
  | "select"
>;

/**
 * A configuration object used for customizing the behavior of a useMutation hook.
 * It extends the UseMutationOptions from React Query by adding an additional onTransaction callback.
 *
 * @template Data - The type of the data returned by the mutation.
 * @template Error - The type of the error returned by the mutation.
 * @template Variables - The type of the variables used by the mutation (default to void).
 *
 * @property onError - A function that is called when the mutation encounters an error.
 * @property onMutate - A function that is called before the mutation function is executed. It receives the same variables as the mutation function, and its returned value is passed to both onError and onSettled functions in the event of a mutation failure.
 * @property onSettled - A function that is called when the mutation is either successfully fetched or encounters an error.
 * @property onSuccess - A function that is called when the mutation is successful. It is passed the mutation's result.
 * @property onTransaction - An optional callback function that is called with the transaction hash (txHash) when a new transaction is created.
 */
export type MutationConfig<Data, Error, Variables = void> = {
  onError?: UseMutationOptions<Data, Error, Variables>["onError"];
  onMutate?: UseMutationOptions<Data, Error, Variables>["onMutate"];
  onSettled?: UseMutationOptions<Data, Error, Variables>["onSettled"];
  onSuccess?: UseMutationOptions<Data, Error, Variables>["onSuccess"];
};

/**
 * @typedef {object} NewDaoParams
 * @property {MutationConfig<NewDaoReturnData, Error>} config - The configuration for the mutation.
 * @property {DaoMetadata} daoMetadata - The metadata for the new DAO.
 * @property {string} [daoUri] - The URI for the new DAO.
 * @property {string} ensSubdomain - The ENS subdomain for the new DAO.
 * @property {string} [trustedForwarder] - The trusted forwarder address for the new DAO.
 * @property {IPluginInstallItem[]} plugins - The plugins to be installed in the new DAO.
 * @property {(txHash: string) => void} [onCreateDaoTransaction] - A callback to be called when the DAO creation transaction is created.
 */
export type NewDaoParams = MutationConfig<NewDaoReturnData, Error> & {
  daoMetadata: DaoMetadata;
  daoUri?: string;
  ensSubdomain: string;
  trustedForwarder?: string;
  plugins: IPluginInstallItem[];
  onCreateDaoTransaction?: (txHash: string) => void;
};

/**
 * @typedef {object} NewDaoReturnData
 * @property {string|null} daoAddress - The address of the created DAO.
 * @property {string|null} daoTxHash - The transaction hash of the created DAO.
 */
export type NewDaoReturnData = {
  daoAddress: string | null;
  daoTxHash: string | null;
};

/**
 * Enum representing the possible statuses of a new DAO creation process.
 * @readonly
 * @enum {string}
 */
export enum NewDaoStatus {
  IDLE = "idle",
  PINNING_METADATA = "pinningMetadata",
  CREATING_DAO = "creatingDao",
  SUCCESS = "success",
  ERROR = "error",
}

/**
 * @typedef {object} NewDaoReturnType
 * @extends {UseMutationResult<NewDaoReturnData, Error, void, unknown>}
 * @property {string|null} daoAddress - The address of the created DAO.
 * @property {string|null} daoTxHash - The transaction hash of the created DAO.
 * @property {NewDaoStatus} creationStatus - The current status of the new DAO creation process.
 */
export type NewDaoReturnType = UseMutationResult<
  {
    daoAddress: string | null;
    daoTxHash: string | null;
  },
  Error,
  void,
  unknown
> & {
  daoAddress: string | null;
  daoTxHash: string | null;
  creationStatus: NewDaoStatus;
};
