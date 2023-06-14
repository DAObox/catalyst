import { type CreateDaoStepProps } from "typings/typings";

export default function SelectBlockchain({ current }: CreateDaoStepProps) {
    return(
        <div className={`max-w-full p-10 ${current ? "bg-trans-gray" : "border border-medium-gray"} text-lighter-gray rounded-lg`}>
            <p className="text-xl text-center">Select <br /> Blockchain</p>
        </div>
    )
}