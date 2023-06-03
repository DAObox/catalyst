import { currentTabDetail } from "atoms/atoms"
import { useRecoilState, useRecoilValue } from "recoil"
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import { ArrowTrendingUpIcon, FolderIcon } from "@heroicons/react/24/solid"

export default function MemberDetailsTab() {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [currentTab, setCurrent] = useRecoilState(currentTabDetail)

    const tabs = [
        { name: 'Activity', icon: ArrowTrendingUpIcon, current: currentTab === 'activity' },
        { name: 'Proposals', icon: FolderIcon, current: currentTab === 'proposals' },
        { name: 'Delegates', icon: UsersIcon, current: currentTab === 'delegates' },
    ]

    return (
        <div>
            <div className="border-b border-medium-gray">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={classNames(
                                tab.current
                                    ? 'border-green text-green'
                                    : 'border-transparent text-light-gray hover:text-green',
                                'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium hover:cursor-pointer'
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
        </div>
    )
}