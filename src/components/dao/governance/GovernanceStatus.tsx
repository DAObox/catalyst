import GovernanceStatusItem from "./GovernanceStatusItem";

export default function GovernanceStatus() {
    return (
        <div className="space-y-3 bg-gray border border-gray-border h-fit rounded-xl px-5 py-10">
            <div>
                <h1 className="text-xl text-lighter-gray">Status</h1>
            </div>
            <div className="space-y-3">
                <GovernanceStatusItem date={"Wed, 31st May 06:35 PM UTC+1"} type={"Proposed"} />
                <GovernanceStatusItem date={"Wed, 31st May 06:35 PM UTC+1"} type={"Voting Started"} />
                <GovernanceStatusItem date={"Wed, 31st May 06:35 PM UTC+1"} type={"Concluded"} />
                <GovernanceStatusItem date={"Wed, 31st May 06:35 PM UTC+1"} type={"Executed"} />
            </div>
        </div>
    )
}