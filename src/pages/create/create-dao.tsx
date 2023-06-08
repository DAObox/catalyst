import CreateDaoAccordion from "@/components/create-dao/CreateDaoAccordion";
import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";

export default function CreateDao() {
    return (
        <CreateDaoAppShell>
            <div className="w-full bg-gray border border-gray-border p-10 rounded-xl">
                <div className="space-y-2">
                    <h1 className="text-lighter-gray text-4xl">Create Your DAO</h1>
                    <p className="text-light-gray">Create your DAO description</p>
                    <div>
                        <CreateDaoAccordion />
                    </div>
                </div>
            </div>
        </CreateDaoAppShell>
    )
}