import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ page }) {
  return (
    <nav
      className="navbar navbar-expand-sm bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todo-List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {page === "home" ? (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              ) : (
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              )}
            </li>
            <li className="nav-item">
              {page === "image" ? (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/image"
                >
                  Images
                </Link>
              ) : (
                <Link className="nav-link" to="/image">
                  Images
                </Link>
              )}
            </li>
            <li className="nav-item">
              {page === "about" ? (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              ) : (
                <Link className="nav-link" to="/about">
                  About
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
