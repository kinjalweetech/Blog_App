import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MockApiView = () => {
  const { id } = useParams(); // Get the id from the route
  const { data, detail } = useSelector((state) => state.mockApi); // Get data and detailed data from Redux store

  // Find the item that matches the id
  const item = data.find((item) => item.id === id) || detail;

  if (!item) return <p>No details available</p>;

  return (
    <div className="container" style={{ paddingTop: '8vh' }}>
      <img src={item.avatar} alt={item.name} />
      <div className="data">
        <p>Name: {item.name}</p>
        <p>Id: {item.id}</p>
        <p>Created At: {item.createdAt}</p>
        <p>Description: {item.description}</p> {/* Assuming there's a description */}
      </div>
    </div>
  );
};

export default MockApiView;
// import React from "react";
// import { useSelector } from "react-redux";

// const Profile = () => {
//   const { details: singleData } = useSelector((state) => state.author);

//   if (!singleData) {
//     return <p>No user details available</p>;
//   }

//   return (
//     <>
//       <div className="profile-container">
//         <img src={singleData.avatar} alt="jhon" />
//         <h2 style={{ padding: "10px 0" }}>{singleData.name}</h2>
//         <p>POSTS : 4</p>
//         <p>LIKES: 10</p>
//       </div>

//       <div className="post-container">
//         <h3>Posts</h3>
//         <div className="row text-white">
//           <div className="col-sm p-3">Assending by date</div>
//           <div className="col-sm p-3">Decending by date</div>
//           <div className="col-sm p-3">Assending by Like</div>
//           <div className="col-sm p-3">decending by Like</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;