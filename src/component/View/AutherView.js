import { useEffect } from "react";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";
import NextPrevButton from "../Functinality/next-prevButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MockApiCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, currentPage } = useSelector((state) => state.mockApi);

  useEffect(() => {
    dispatch(fetchMockApiData(currentPage));
  }, [dispatch, currentPage]);

  const handleDetailSuccess = (user) => {
    dispatch(setDetail(user)); // Set the current user detail in Redux state
    navigate(`/details/${user.id}`); // Navigate to the MockApiView with user id
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
                  onClick={() => handleDetailSuccess(user)} // Pass user to handleDetailSuccess
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
