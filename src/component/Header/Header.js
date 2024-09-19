import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid justify-content-between">
            <Link to="/" className="navbar-brand">
              <h5>JSOM</h5>
            </Link>

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
                  <Link to="/" className="nav-link">
                    <h5>Auther</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <h5>MostLike</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <h5>MostCommentLike</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
