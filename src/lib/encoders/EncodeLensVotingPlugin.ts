import { type IPluginInstallItem } from "@aragon/sdk-client";
import { defaultAbiCoder } from "ethers/lib/utils";
import { hexToBytes } from "../hexTools";

export const DAOBOX_PLUGIN_REPOS = {
  network: {
    mumbai: { lensVoting: "0xD42Aa286DD6c5610FAF4D402B055f35dDb446432" },
    polygon: { lensVoting: "0x0650EE961514C90D927F302b374d52344E8C62BF" },
  },
} as const;

export interface LensVotingPluginParams {
  supportThreshold?: number; // Float between 0 and 1 ::  Default: 0.5
  minParticipation?: number; // Float between 0 and 1 ::  Default: 0.25
  votingMode?: number; // 0: STANDARD, 1: EARLY_EXECUTION, 2: VOTE_REPLACEMENT :: Default: 0
  minDuration?: number; // Default: 60 * 60 * 24 * 3 (3 days)
  minProposerVotingPower?: bigint; // Default: 0n
  lensFollowNFT: string;
  network: "polygon" | "mumbai";
}

export interface EncodePluginInstallationProps {
  types: string[];
  repoAddress: string;
  parameters: any[];
}

export const encodeLensVotingPlugin = ({
  supportThreshold = 0.5,
  minParticipation = 0.25,
  votingMode = 0,
  minDuration = 60 * 60 * 24 * 3,
  minProposerVotingPower = BigInt(0),
  lensFollowNFT,
  network,
}: LensVotingPluginParams) => {
  return encodePluginInstallItem({
    repoAddress: DAOBOX_PLUGIN_REPOS.network[network].lensVoting,
    types: [
      "tuple(uint8 votingMode, uint64 supportThreshold, uint64 minParticipation, uint64 minDuration, uint256 minProposerVotingPower) votingSettings",
      "address votingToken",
    ],
    parameters: [
      {
        votingMode: votingMode,
        supportThreshold: encodeRatio(supportThreshold, 6),
        minParticipation: encodeRatio(minParticipation, 6),
        minDuration: minDuration,
        minProposerVotingPower: minProposerVotingPower,
      },
      lensFollowNFT,
    ],
  });
};

function encodePluginInstallItem({
  types,
  repoAddress,
  parameters,
}: EncodePluginInstallationProps): IPluginInstallItem {
  const hexBytes = defaultAbiCoder.encode(types, parameters);

  return {
    id: repoAddress,
    data: hexToBytes(hexBytes),
  };
}

function encodeRatio(ratio: number, digits: number): number {
  if (ratio < 0 || ratio > 1) {
    throw new Error("The ratio value should range between 0 and 1");
  } else if (!Number.isInteger(digits) || digits < 1 || digits > 15) {
    throw new Error("The number of digits should range between 1 and 15");
  }
  return Math.round(ratio * 10 ** digits);
}
