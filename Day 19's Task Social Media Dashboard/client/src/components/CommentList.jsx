export default function CommentList({ comments }) {
  return (
    <div className="mt-4 space-y-3">
      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm">No comments yet.</p>
      ) : (
        comments.map((c, i) => (
          <div
            key={i}
            className="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm"
          >
            <p className="text-gray-700">
              <span className="font-semibold">{c.userId?.name || "User"}:</span>{" "}
              {c.text}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
