import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import DurationControl from "@/components/create-dao/DurationControl";
import MinimumParticipationControl from "@/components/create-dao/MinimumParticipationControl";
import QuorumControl from "@/components/create-dao/QuorumControl";
import { createDaoStep } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function Governance() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(4)
    return (
        <CreateDaoAppShell className="space-y-6">
            <div className="space-y-3">
                <div>
                    <h2 className="text-2xl font-medium text-lighter-gray">Quorum</h2>
                    <p className="text-light-black text-lg">The percentage of users need that is required for a voting to be approved</p>
                </div>
                <div>
                    <QuorumControl />
                </div>
            </div>
            <div className="space-y-3">
                <div>
                    <h2 className="text-2xl font-medium text-lighter-gray">Minimum Participation</h2>
                    <p className="text-light-black text-lg">The least percentage of users need that is required for a voting to be approved</p>
                </div>
                <div>
                    <MinimumParticipationControl />
                </div>
            </div>
            <div className="space-y-3">
                <div>
                    <h2 className="text-2xl font-medium text-lighter-gray">Duration</h2>
                    <p className="text-light-black text-lg">The amount of time a proposal can be opened</p>
                </div>
                <div>
                    <DurationControl />
                </div>
            </div>
        </CreateDaoAppShell>
    )
}