import React from "react";
import AuthorView from "../View/AutherView";

const Header = () => {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid justify-content-between">
            <h2 className="navbar-brand">JSOM</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <h2 className="nav-link">Author</h2>
                </li>
                <li className="nav-item">
                  <h2 className="nav-link">MostLikedPost</h2>
                </li>
                <li className="nav-item">
                  <h2 className="nav-link">MostCommentPost</h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div>
        {/* <AuthorView/> */}
      </div>
    </>
  );
};

export default Header;