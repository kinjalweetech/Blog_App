import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";
import { useNavigate } from "react-router-dom";

const MockApiCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get data and loading state from Redux store
  const { data, loading } = useSelector((state) => state.mockApi);

  // Fetch API data on component mount
  useEffect(() => {
    dispatch(fetchMockApiData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  const handleDetailSuccess = (value) => {
        dispatch(setDetail(value));
        navigate(`/ApiView/${value.id}`);
      };

  return (
    <div className="main-contain">
      {data.length !== 0 ? (
        data.map((value) => (
          <div className="container" key={value.id}>
            <img src={value.avatar} alt={value.Images} />
            <div className="data">
              <p>Name: {value.name}</p>
              <p>Id: {value.id}</p>
              <p>Created At: {value.createdAt}</p>

              {/* View Details Button */}
              <button
                className="view-details-button"
                onClick={(e) => {
                  e.preventDefault();
                handleDetailSuccess(value);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default MockApiCreate;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   fetchAuthor,
//   requestDetailSuccessAction,
// } from "../../redux/reducer/AuthorSlice";

// const AuthorPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { data, loading } = useSelector((state) => state.author);

//   useEffect(() => {
//     dispatch(fetchAuthor());
//   }, [dispatch]);

//   const handleDetailSuccess = (user) => {
//     dispatch(requestDetailSuccessAction(user));
//     navigate(/profile/${user.id});
//   };

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       <div className="authors-grid">
//         {data &&
//           data.map((user) => (
//             <div
//               className="authorPage-container"
//               key={user.id}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleDetailSuccess(user);
//               }}
//             >
//               <img src={user.avatar} alt='' />
//               <p>{user.name}</p>
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleDetailSuccess(user);
//                 }}
//               >
//                 Click to view Profile
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AuthorPage;