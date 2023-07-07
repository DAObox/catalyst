import { truncate } from "@/lib/functions";
import Image from "next/image";
import Dot from "./Dot";
import HeartButton from "@/components/buttons/HeartButton";
import CommentButton from "@/components/buttons/CommentButton";
import VotingPowerDetail from "./VotingPowerDetail";

export default function LikedInPostCard() {
  return (
    <div className="w-full space-y-2">
      <div className="flex space-x-5">
        <div className="flex flex-1 items-center space-x-5">
          <div>
            <div>
              <Image
                src={"/avatar.png"}
                width={50}
                height={50}
                alt="icon"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base font-medium text-lighter-gray">AbuUsama.eth</p>
            <div className="flex items-center space-x-1.5">
              <div>
                <p className="text-sm text-light-black">@abdulla.lens</p>
              </div>
              <div>
                <Dot />
              </div>
              <div>
                <p className="text-xs text-medium-gray">March 21</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div>
            <Image
              src={"/logos/aragon.png"}
              width={16}
              height={16}
              alt="icon"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-xs text-light-gray">Aragon DAO</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-lighter-gray">
          Community Token Contract Upgrade: Revolutionizing the Web3 Landscape
        </h3>
      </div>
      <div>
        <p className="text-xs text-light-black">
          {truncate(
            `In the realm of Web3, the Community Token Contract Upgrade represents a paradigm shift towards enhanced decentralized governance and community empowerment. Through this groundbreaking upgrade, the community takes center stage, wielding the power to shape the future of the token ecosystem. Embracing the principles of transparency and inclusivity, the upgraded contract facilitates seamless community participation in decision-making processes. Every token holder becomes an active participant, driving collective progress and fostering a sense of ownership. 
                This innovative upgrade leverages cutting-edge blockchain technology to ensure the security and integrity of transactions. With enhanced smart contract functionalities, the Community Token Contract Upgrade paves the way for efficient token swaps, staking, and yield farming, fueling a vibrant and thriving ecosystem.
                As the Web3 landscape evolves, the Community Token Contract Upgrade serves as a catalyst for collaboration, enabling the community to collectively forge new paths towards a more decentralized and equitable future. Together, we embark`,
            1000
          )}
        </p>
      </div>
      <div className="flex items-center space-x-2.5">
        <div>
          <CommentButton />
        </div>
        <div>
          <HeartButton />
        </div>
        <div>
          <VotingPowerDetail power="21" />
        </div>
      </div>
    </div>
  );
}
