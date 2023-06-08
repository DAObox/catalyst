import CreateDaoAppShell from "@/components/create-dao/CreateDaoAppShell";
import { createDaoStep } from "atoms/atoms";
import { useRecoilState } from "recoil";

export default function AboutDao() {
    const [, setCurrent] = useRecoilState(createDaoStep)
    setCurrent(2)
    return(
        <CreateDaoAppShell>
            <div>About Dao</div>
        </CreateDaoAppShell>
    )
}