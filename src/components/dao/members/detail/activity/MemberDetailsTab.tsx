import { currentTabDetail } from "atoms/atoms"
import { useRecoilState } from "recoil"
import { memberTabs } from "@/lib/constants"
import { classNames } from "@/lib/functions"
import Activity from "../Activity"
import Proposals from "../Proposals"
import Delegates from "../Delegates"

export default function MemberDetailsTab() {

    const [current, setCurrent] = useRecoilState(currentTabDetail)

    return (
        <div className="space-y-5">
            <div className="border-b border-medium-gray">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {memberTabs(current).map((tab) => (
                        <div
                            key={tab.name}
                            className={classNames(
                                tab.current
                                    ? 'border-green text-green'
                                    : 'border-transparent text-light-gray hover:text-green',
                                'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium hover:cursor-pointer hover:border-green'
                            )}
                            onClick={() => setCurrent(tab.name.toLocaleLowerCase())}
                        >
                            <tab.icon
                                className={classNames(
                                    tab.current ? 'text-green' : 'text-light-gray group-hover:text-green',
                                    '-ml-0.5 mr-2 h-5 w-5'
                                )}
                                aria-hidden="true"
                            />
                            <span>{tab.name}</span>
                        </div>
                    ))}
                </nav>
            </div>
            <div>
                {
                    current === "activity" ? <Activity /> : current === "proposals" ? <Proposals /> : <Delegates />
                }
            </div>
        </div>
    )
}