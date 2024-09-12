import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";
import NextPrevButton from "../Functinality/next-prevButton"; // Use the corrected component name

const MockApiCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, currentPage } = useSelector((state) => state.mockApi);

  useEffect(() => {
    console.log("Data from Redux:", data); // Add this log to check the data
    dispatch(fetchMockApiData(currentPage));
  }, [dispatch, currentPage]);

  const handleDetailSuccess = (user) => {
    dispatch(setDetail(user));
    navigate(`/details/${user.id}`);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="main-contain">
        {data.length !== 0 ? (
          data.map((user) => (
            <div className="container" key={user.id}>
              <img src={user.avatar} alt={user.Images} />
              <div className="data">
                <p>Name: {user.name}</p>
                <p>Id: {user.id}</p>
                <p>Created At: {user.createdAt}</p>
                <button
                  className="view-details-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailSuccess(user);
                  }}
                >
                  Click to view Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
      <NextPrevButton />
    </div>
  );
};
export default MockApiCreate;
