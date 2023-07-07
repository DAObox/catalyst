import AddCommentButton from "@/components/buttons/AddCommentButton";

export default function AddComment() {
  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-border bg-gray p-10">
      <h3 className="text-xl font-bold text-lighter-gray">Add comment</h3>
      <textarea
        className="h-32 w-full rounded-lg border border-trans-gray bg-transparent p-2 text-medium-gray outline-0 placeholder:text-medium-gray"
        placeholder="Say what is in your mind"
      />
      <AddCommentButton />
    </div>
  );
}
