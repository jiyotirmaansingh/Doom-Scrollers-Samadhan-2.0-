import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="max-w-xl mx-auto mt-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Profile Page</h2>
      <p>User ID: {id}</p>
      <p>In real app: fetch user posts, bio, avatar etc.</p>
    </div>
  );
};

export default Profile;
