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
        <div className="container-fluid">
        <div className="row custom-buttons">
          <div className="col-3 btn-style">Ascending By Date</div>
          <div className="col-3 btn-style">Descending By Date</div>
          <div className="col-3 btn-style">Ascending By Like</div>
          <div className="col-3 btn-style">Descending By Like</div>
        </div>
      </div>
        
        </div>
      
    </>
  );
};
export default MockApiView;
