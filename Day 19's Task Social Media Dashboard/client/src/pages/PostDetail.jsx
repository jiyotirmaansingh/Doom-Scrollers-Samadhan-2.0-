import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const res = await api.get("/posts");
      const found = res.data.find((p) => p._id === id);
      setPost(found);
    } catch (err) {
      console.error("Fetch post error", err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-4 bg-white p-6 rounded shadow">
      <h2 className="font-bold">{post.userId.name}</h2>
      <p className="my-2">{post.content}</p>
      <p className="text-sm text-gray-600">Likes: {post.likes.length}</p>
      <CommentList comments={post.comments} />
      <CommentForm postId={post._id} onCommentAdded={setPost} />
    </div>
  );
};

export default PostDetail;
