import { earlyExecutionAtom } from "atoms/atoms"
import { useRecoilState } from "recoil"

export default function EarlyExecutionControl() {
    const [earlyExecution, setEarlyExecution] = useRecoilState(earlyExecutionAtom)
    return (
        <div className="w-full flex items-center space-x-5">
            <button className="flex-1 bg-gray py-3 px-5 rounded-lg flex items-center justify-start" onClick={() => setEarlyExecution("yes")}>
                <div className="flex items-center space-x-1.5">
                    <input type="radio" name="early-execution-radio" className="radio border-light-black border checked:border-0 checked:bg-green checked:outline-0"
                        checked={earlyExecution == "yes" ? true : false} />
                    <h3 className="font-medium text-lighter-gray">Yes</h3>
                </div>
            </button>
            <button className="flex-1 bg-gray py-3 px-5 rounded-lg flex items-center justify-star" onClick={() => setEarlyExecution("no")}>
                <div className="flex items-center space-x-1.5">
                    <input type="radio" name="early-execution-radio" className="radio border-light-black border checked:border-0 checked:bg-green checked:outline-0"
                        checked={earlyExecution == "no" ? true : false} />
                    <h3 className="font-medium text-lighter-gray">No</h3>
                </div>
            </button>
        </div>
    )
}