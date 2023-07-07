import MemberDetailsCardPost from "./activity/MembersDetailsCardPost";
import CommentInPostCard from "./activity/CommentInPostCard";
import LikedInPostCard from "./activity/LikedInPostCard";
import ActivityDivider from "./activity/ActivityDivider";

export default function Activity() {
  return (
    <div className="space-y-5">
      <MemberDetailsCardPost />
      <ActivityDivider />
      <CommentInPostCard />
      <ActivityDivider />
      <LikedInPostCard />
    </div>
  );
}
