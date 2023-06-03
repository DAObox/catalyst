import MemberDetailsCardPost from "./activity/MembersDetailsCardPost"
import CommentInPostCard from "./activity/CommentInPostCard"
import LikedInPostCard from "./activity/LikedInPostCard"

export default function Activity() {
    return (
        <div className="space-y-5">
            <MemberDetailsCardPost />
            <div className="bg-gray-border h-[1px] w-full" />
            <CommentInPostCard />
            <div className="bg-gray-border h-[1px] w-full" />
            <LikedInPostCard />
        </div>
    )
}