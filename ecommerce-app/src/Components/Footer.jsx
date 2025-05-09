import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="container-fluid p-0">
        <footer
          className="text-center text-lg-start text-dark "
          // style={{ backgroundColor: "#f0f0f0" }}
        >
          <section>
            <div className="container-fluid text-center text-md-start">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                  <h6 className="text-uppercase fw-bold">
                    PAKISTAN TEXTILE EXCHANGE
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                  <h6 className="text-uppercase fw-bold">Help</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/Contact" className="text-dark">
                      Contact US
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Shipping & Handling
                    </Link>
                  </p>
                  <p>
                    <Link to="/TermsandConditions" className="text-dark">
                      Terms & Condition
                    </Link>
                  </p>
                  <p>
                    <Link to="/PrivacyandPolicy" className="text-dark">
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                  <h6 className="text-uppercase fw-bold">USEFUL LINKS</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/T" className="text-dark">
                      T-Shirts
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Fleece
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Kids
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                  <h6 className="text-uppercase fw-bold ">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> LAGUNA BREACH,
                    CALIFORNIA
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> sales@paktex.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-2"
        
          >
            © 2025 |
            <Link className="text-dark" to="https://mdbootstrap.com/">
              {" "}
              Paktex.com
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
