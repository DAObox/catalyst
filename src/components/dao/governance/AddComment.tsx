export default function AddComment() {
    return(
        <div className="w-full p-10 rounded-xl bg-gray border border-gray-border space-y-5">
            <h3 className="text-xl font-bold text-lighter-gray">Add comment</h3>
            <textarea className="w-full h-32 bg-transparent border border-trans-gray outline-0 p-2 placeholder:text-medium-gray text-medium-gray" 
            placeholder="Say what is in your mind" />
        </div>
    )
}