import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMockApiData, setDetail } from "../../Redux/ApiSlice";

const Comment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  // Placeholder comment data for now, to be replaced by API data
  const comments = [
    { id: 65, text: "Great post!", userId: 65, name: "Courtney Koss III"},
    { id: 45, text: "Thanks for sharing!", userId: 45, name: "Terry Waters" },
    { id: 40, text: "Very informative!", userId: 40, name: "Judith Tillman" },
  ];

  // Navigate to the user detail page when clicking on user ID
  const handleUserClick = (id, userId, name) => {
    dispatch(setDetail({ id, userId, name }));
    navigate(`/comments/${userId}`);
  };

  // Simulating a fetch effect; later replace with an actual API call
  useEffect(() => {
    dispatch(fetchMockApiData());
  }, [dispatch]);

  return (
    <div className="comment-section">
      <h3>Comment</h3>
      {comments.map((comment) => (
        <div className="comment">
          <p>Comment: {comment.text}</p>
          <p>
            User:
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() =>
                handleUserClick(comment.id, comment.userId, comment.name)
              }
            >
              {comment.userId}<p>{comment.name}</p>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
