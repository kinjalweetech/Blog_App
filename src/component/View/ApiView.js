import React from "react";
import { useSelector } from "react-redux";

const MockApiView = () => {
  const { detail } = useSelector((state) => state.mockApi); // Get data and detailed data from Redux store
  console.log("data", detail);

  if (!detail || !detail.id) return <p>No details available</p>;

  return (
   <>
    <div className="profile-container">
      <img src={detail.avatar} alt="..." />
      <h2 style={{ padding: "10px 0" }}>{detail.name}</h2>
      <p>Id: {detail.id}</p>
      <p>POSTS : 4</p>
      <p>LIKES: 10</p>
    </div>
    <div className="Post-main">
    <p>POSTS</p>
    
    </div>
   </>
  );
};
export default MockApiView;
