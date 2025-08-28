import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Header.css";

export default function Header() {
  const handleNavCollapse = () => {
    const collapse = document.getElementById("navbarSupportedContent");
    if (collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="container ">
          <p className="pt-3">
            {" "}
            Free shipping, 30-day return or refund guarantee.
          </p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
        <div className="container px-0">
          {" "}
          <Link className="navbar-brand" to="/">
            <img src={Image.logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={handleNavCollapse}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Shop"
                  onClick={handleNavCollapse}
                >
                  CATALOG
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="https://book.paktex.com/book/ptx-company-profile/PTX-C-P"
                  onClick={handleNavCollapse}
                >
                  LOOKBOOK
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 ms-auto">
              <Link to="/Login" onClick={handleNavCollapse}>
                <img
                  src={Image.user}
                  alt="User Icon"
                  className="header-icon "
                />
              </Link>
              <Link to="/Cart" onClick={handleNavCollapse}>
                <img src={Image.cart} alt="Cart Icon" className="header-icon" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
