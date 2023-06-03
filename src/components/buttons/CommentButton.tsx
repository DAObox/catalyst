import Image from "next/image"

export default function CommentButton() {
    return (
        <button className="flex items-center space-x-0.5">
            <div>
                <Image src={"/chat.png"} width={12.5} height={12.5} alt="icon" />
            </div>
            <div>
                <p className="text-blue text-[10px]">2</p>
            </div>
        </button>
    )
}