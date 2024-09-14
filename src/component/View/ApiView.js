// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Post1 from "../Post/Post1";
// import { useNavigate } from "react-router-dom";
// import { setDetail } from "../../Redux/ApiSlice";
// import PostDetail from "../Post/PostDetail";

// const MockApiView = () => {
//   const { detail } = useSelector((state) => state.mockApi); // Get data and detailed data from Redux store
//   console.log("data", detail);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   if (!detail || !detail.id) return <p>No details available</p>;

//   const handlePostClick = (postId) => {
//     dispatch(setDetail(postId)); // Set post details in Redux state
//     navigate(`/post/${postId.id}`); // Navigate to the post detail page with the post id
//   };
//   console.log("postId", detail);

//   return (
//     <>
//       <div className="profile-container">
//         <img src={detail.avatar} alt="..." />
//         <h2 style={{ padding: "10px 0" }}>{detail.name}</h2>
//         <p>Id: {detail.id}</p>
//         <p>POSTS : 4</p>
//         <p>LIKES: 10</p>
//       </div>
//       <div className="Post-main">
//         <p>POSTS</p>
//         <div className="container-fluid">
//           <div className="row custom-buttons">
//             <div className="col-3 btn-style">Ascending By Date</div>
//             <div className="col-3 btn-style">Descending By Date</div>
//             <div className="col-3 btn-style">Ascending By Like</div>
//             <div className="col-3 btn-style">Descending By Like</div>
//           </div>
//         </div>
//         <div className="Post">
//           <button className="mainpost1" onClick={() => handlePostClick(1)}>
//             infrastructure Rubber generate{" "}
//             <span style={{ marginLeft: "10px", display: "flex", gap: "10px" }}>
//               12/2/2019
//             </span>
//             <span>like 6</span>
//           </button>
//         </div>
//         <div className="Post">
//           <button
//             className="mainpost2"
//             onClick={() => handlePostClick(<Post1 />)}
//           >
//             Car{" "}
//             <span style={{ marginLeft: "28%", display: "flex", gap: "10px" }}>
//               12/2/2019
//             </span>
//             <span>like 3</span>
//           </button>
//         </div>
//         <div className="Post">
//           <button
//             className="mainpost3"
//             onClick={() => handlePostClick(<Post1 />)}
//           >
//             bypassing Avon Tasty Plastic Gloves{" "}
//             <span style={{ marginRight: "4%", display: "flex", gap: "10px" }}>
//               12/2/2019
//             </span>
//             <span>like 1</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default MockApiView;
