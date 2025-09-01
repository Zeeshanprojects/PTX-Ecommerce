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
      <div className="topbar ">
        <div className="container ">
          <p className="pt-3">
            {" "}
            Free shipping, 30-day return or refund guarantee.
          </p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
        <div className="container-fluid px-5">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={handleNavCollapse}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Men"
                  onClick={handleNavCollapse}
                >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Junior"
                  onClick={handleNavCollapse}
                >
                  Junior
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Denim"
                  onClick={handleNavCollapse}
                >
                  Denim
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Shop"
                  onClick={handleNavCollapse}
                >
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="https://book.paktex.com/book/ptx-company-profile/PTX-C-P"
                  target="_blank"
                  onClick={handleNavCollapse}
                >

                  Lookbook
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 ms-auto ">
              <Link
                to="/search"
                onClick={handleNavCollapse}
                className="text-decoration-none text-white"
              >
                Search
              </Link>
              <Link
                to="/Login"
                onClick={handleNavCollapse}
                className="text-decoration-none text-white"
              >
              Sign in
              </Link>
              <Link
                to="/Cart"
                onClick={handleNavCollapse}
                className="text-decoration-none text-white"
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
