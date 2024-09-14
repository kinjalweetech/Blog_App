// // import { useSelector } from "react-redux";
// // import { useParams } from "react-router-dom"

// // const PostDetail = () => {
// //   const {id} = useParams();
// //   const {detail} = useSelector((state) => state.mockApi);

// //   return (
// //     <>
// //       <div>
// //         <h1>post</h1>
// //       </div>
// //     </>
// //   )
// // }
// // export default PostDetail;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchMockApiData, fetchUserPosts } from "../../Redux/ApiSlice"; // Import the thunk

// const PostDetail = () => {
//   const { id } = useParams(); // Get post id from the route parameters
//   const dispatch = useDispatch();
//   const { detail, loading, error } = useSelector((state) => state.mockApi); // Get the post detail from Redux

//   useEffect(() => {
//     dispatch(fetchMockApiData(id));
//     dispatch(fetchUserPosts(id)) // Fetch the post detail by ID
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Post Detail</h1>
//       {detail ? (
//         <div>
//           {/* <p>Id: {id.id}</p> */}
//           <p>Title: {detail.title}</p>
//           <p>Date: {detail.createdAt}</p>
//           <p>Likes: {detail.likes}</p>
//         </div>
//       ) : (
//         <p>No details available for this post.</p>
//       )}
//     </div>
//   );
// };

// export default PostDetail;
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchUserPosts } from "../../Redux/ApiSlice"; // Import the thunk

// const PostDetail = () => {
//   const { id } = useParams(); // Get post id from the route parameters
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.mockApi); // Get the post detail from Redux

//   useEffect(() => {
//     dispatch(fetchUserPosts(id)); // Fetch the post detail by ID
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const post = posts.find((post) => post.id === Number(id)); // Find the post by id

//   return (
//     <div>
//       <h1>Post Detail</h1>
//       {post ? (
//         <div>
//           <p>Title: {post.title}</p>
//           <p>Date: {post.createdAt}</p>
//           <p>Likes: {post.likes}</p>
//         </div>
//       ) : (
//         <p>No details available for this post.</p>
//       )}
//     </div>
//   );
// };

// export default PostDetail;
