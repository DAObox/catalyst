import { voteChangeAtom } from "atoms/atoms"
import { useRecoilState } from "recoil"

export default function VoteChangeControl() {
    const [voteChange, setVoteChange] = useRecoilState(voteChangeAtom)
    return (
        <div className="w-full flex items-center space-x-5">
            <button className="flex-1 bg-gray py-3 px-5 rounded-lg flex items-center justify-start" onClick={() => setVoteChange("yes")}>
                <div className="flex items-center space-x-1.5">
                    <input type="radio" name="vote-radio" className="radio border-light-black border checked:border-0 checked:bg-green checked:outline-0"
                        checked={voteChange == "yes" ? true : false} />
                    <h3 className="font-medium text-lighter-gray">Yes</h3>
                </div>
            </button>
            <button className="flex-1 bg-gray py-3 px-5 rounded-lg flex items-center justify-star" onClick={() => setVoteChange("no")}>
                <div className="flex items-center space-x-1.5">
                    <input type="radio" name="vote-radio" className="radio border-light-black border checked:border-0 checked:bg-green checked:outline-0"
                        checked={voteChange == "no" ? true : false} />
                    <h3 className="font-medium text-lighter-gray">No</h3>
                </div>
            </button>
        </div>
    )
}