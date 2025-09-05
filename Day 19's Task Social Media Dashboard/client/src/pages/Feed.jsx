import React, { useEffect, useState } from "react";
import api from "../services/api";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Fetch posts error", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p._id === updatedPost._id ? updatedPost : p)));
  };

  return (
    <div className="max-w-xl mx-auto mt-4">
      <CreatePost onPostCreated={handlePostCreated} />
      {posts.map((post) => (
        <PostCard key={post._id} post={post} onUpdate={handleUpdatePost} />
      ))}
    </div>
  );
};

export default Feed;
