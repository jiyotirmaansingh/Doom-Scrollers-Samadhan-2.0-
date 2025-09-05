import { useState } from "react";
import api from "../services/api";

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/posts",
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent("");
      onPostCreated(res.data);
    } catch (err) {
      console.error("❌ Post failed:", err.response?.data || err.message);
      alert("Failed to create post");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
        >
          Post
        </button>
      </form>
    </div>
  );
}
