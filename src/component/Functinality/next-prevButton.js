import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setPage } from "../../Redux/ApiSlice";

const NextPrevButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pageNumber } = useParams(); // Destructure the pageNumber from useParams
  const page = Number(pageNumber) || 1; // Default to page 1 if no page number is present

  useEffect(() => {
    dispatch(setPage(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    navigate(`/page/${newPage}`);
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const totalPages = 50; // Example: adjust based on your API

  return (
    <>
      {/* Pagination Controls */}
      <ul className="pagination">
        {/* Previous Button */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={handlePreviousPage}>
            Previous
          </button>
        </li>

        {/* Display current page number */}
        <li className="page-item active">
          <span className="page-link">{page}</span>
        </li>

        {/* Next Button */}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={handleNextPage}>
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default NextPrevButton;
