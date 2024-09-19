import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";

const MockApiView = () => {
  const { detail, loading } = useSelector((state) => state.mockApi);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userid } = useParams(); // Get userId from the URL

  // Fetch detail from local storage on component mount
  useEffect(() => {
    if (userid) {
      dispatch(fetchMockApiData(detail));
    }
  }, [dispatch, detail, userid]);

  const handlePostClick = (postId) => {
    dispatch(setDetail(postId));
    navigate(`/post/${postId.id}`);
  };

  const handlePost2Click = (postId) => {
    dispatch(setDetail(postId));
    navigate(`/post2/${postId.id}`);
  };

  const handlePost3Click = (postId) => {
    dispatch(setDetail(postId));
    navigate(`/post3/${postId.id}`);
  };
  console.log("detail", detail);

  if (loading) return <p>Loading...</p>;
  if (!detail) return <p>No details available</p>;

  return (
    <>
      <div className="profile-container">
        <img src={detail.avatar} alt="..." />
        <h2 style={{ padding: "10px 0" }}>{detail.name}</h2>
        <p>Id: {detail.id}</p>
        {/* <p>createdAt:{detail.createdAt}</p> */}
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
        <div className="Post">
          <button
            className="mainpost1"
            onClick={() =>
              handlePostClick({
                id: 1,
                title: "Post 1",
                date: "12/2/2019",
                likes: 6,
              })
            }
          >
            infrastructure Rubber generate
            <span style={{ marginLeft: "10px", display: "flex", gap: "10px" }}>
              12/2/2019
            </span>
            <span>like 6</span>
          </button>
        </div>
        <div className="Post">
          <button
            className="mainpost2"
            onClick={() =>
              handlePost2Click({
                id: 2,
                title: "Car",
                date: "15/5/2019",
                likes: 3,
              })
            }
          >
            Car
            <span style={{ marginLeft: "28%", display: "flex", gap: "10px" }}>
              15/5/2019
            </span>
            <span>like 3</span>
          </button>
        </div>
        <div className="Post">
          <button
            className="mainpost3"
            onClick={() =>
              handlePost3Click({
                id: 3,
                title: "Tasty Plastic Gloves",
                date: "20/7/2019",
                likes: 1,
              })
            }
          >
            bypassing Avon Tasty Plastic Gloves
            <span style={{ marginRight: "4%", display: "flex", gap: "10px" }}>
              20/7/2019
            </span>
            <span>like 1</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default MockApiView;
