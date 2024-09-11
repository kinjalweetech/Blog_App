import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";
import { useNavigate } from "react-router-dom";

const MockApiCreate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.mockApi);

  useEffect(() => {
    dispatch(fetchMockApiData());
  }, [dispatch]);

  const handleDetailSuccess = (user) => {
    dispatch(setDetail(user));
    navigate(`/details/${user.id}`);
  };

  return (
 
    <div >
      {loading && <p>Loading...</p>}
      <div className="main-contain">
        {data.length  !== 0 ? (
          data.map((user) => (
            <div
              className="container"
              key={user.id}>
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
                }}>
                    Click to view Profile
              </button>
            </div>
            </div>
          ))
        ): (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default MockApiCreate;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUserPosts } from "../../Redux/ApiSlice";
// import { useParams, useNavigate } from "react-router-dom";

// const MockApiView = () => {
//   const { detail, posts, loading } = useSelector((state) => state.mockApi);
//   const { id } = useParams();  // Get user ID from route params
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (detail && detail.id) {
//       dispatch(fetchUserPosts(detail.id));  // Fetch posts for the user
//     }
//   }, [dispatch, detail]);

//   if (loading) return <p>Loading...</p>;

//   if (!detail || !detail.id) return <p>No details available</p>;

//   const handlePostClick = (postId) => {
//     navigate(`/post/${postId}`);  // Navigate to post details page
//   };

//   return (
//     <div className="profile-container">
//       <img src={detail.avatar} alt="Profile" />
//       <h2>{detail.name}</h2>
//       <p>ID: {detail.id}</p>

//       <h3>Posts:</h3>
//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post.id}>
//             <p>{post.title}</p>
//             <button onClick={() => handlePostClick(post.id)}>View Post</button>
//           </div>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//     </div>
//   );
// };

// export default MockApiView;


// Create a new component to show the post details when a post title is clicked.

// js
// Copy code
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchPostById } from "../../Redux/ApiSlice";  // You will add a new thunk for this
// import { useParams } from "react-router-dom";

// const PostDetailView = () => {
//   const { postId } = useParams();  // Get post ID from route params
//   const { post, loading } = useSelector((state) => state.mockApi);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPostById(postId));  // Fetch the post details by ID
//   }, [dispatch, postId]);

//   if (loading) return <p>Loading post...</p>;

//   if (!post) return <p>Post not found</p>;

//   return (
//     <div className="post-detail">
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>Author: {post.authorName}</p>
//     </div>
//   );
// };

// export default PostDetailView;

// // Fetch a specific post by ID.....................add a new thunk slice
// export const fetchPostById = createAsyncThunk(
//   "mockApi/fetchPostById",
//   async (postId) => {
//     const response = await axios.get(
//       `https://66d7f3d137b1cadd8052c5c1.mockapi.io/https/mock/posts/${postId}`
//     );
//     return response.data;
//   }
// );
