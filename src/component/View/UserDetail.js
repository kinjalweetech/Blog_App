import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMockApiData } from "../../Redux/ApiSlice"; 

const UserDetails = () => {
  const { userId } = useParams(); 
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.mockApi.detail); // Select the user details from Redux

  useEffect(() => {
    // Assuming you fetch user details based on userId
    dispatch(fetchMockApiData(userId));
  }, [dispatch, userId]);

  if (!detail) return <p>Loading...</p>;

  // Safely handle the createdAt field if it exists
  const createdAtDate = detail.createdAtDate ? detail.createdAtDate : ["22/2/2013"];
  const createdAtTime = detail.createdAtTime ?  detail.createdAtTime : ["22:11:60 : 400Z"]
 

  return (
    <div className="user-details">
      <div className="profile-container">
        <img src={detail.avatar} alt="User Avatar" />
        <h2>{detail.name}</h2>
        <p>ID: {detail.id}</p>
      </div>
      <div className="header-date">
        <h3>Posted Post Date-Time Section</h3>
      </div>
      <div className="date-time-section">
        <p>Created Post Date: {createdAtDate}</p> 
        </div>
        <div className="date-time-section">
        <p>Created Post Time: {createdAtTime}</p>
      </div>
    </div>
  );
};

export default UserDetails;
