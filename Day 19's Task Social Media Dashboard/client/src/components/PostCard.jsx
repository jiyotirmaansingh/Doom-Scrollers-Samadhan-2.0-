import React, { useContext } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const PostCard = ({ post, onUpdate }) => {
  const { user, token } = useContext(AuthContext);

  const handleLike = async () => {
    try {
      const res = await api.post(
        `/posts/${post._id}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdate(res.data);
    } catch (err) {
      console.error("Like error", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <Link to={`/profile/${post.userId._id}`} className="font-bold">
        {post.userId.name}
      </Link>
      <p className="my-2">{post.content}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <button onClick={handleLike}>
          👍 {post.likes.length}
        </button>
        <Link to={`/posts/${post._id}`}>
          💬 {post.comments.length}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
