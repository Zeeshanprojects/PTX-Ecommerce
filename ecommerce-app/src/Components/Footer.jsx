import { useState } from "react";

import "./Footer.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/EcommerceNews",
          { email }
        );
        if (response.status === 200 || response.status === 201) {
          setSubscribed(true);
          setEmail("");
          setTimeout(() => setSubscribed(false), 5000);
        }
      } catch (error) {
        console.error("Subscription failed:", error);
      }
    }
  };
  return (
    <>
      <div className="container-fluid p-0 ">
        <footer
          className="text-center text-lg-start text-light "
          style={{ backgroundColor: "black" }}
        >
          <section>
            <div className="container-fluid text-center text-md-start pt-5 pb-5">
              <div className="row mt-3">
                <div className="col-md-12 text-md-center  text-lg-start col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
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
                    Trusted by industry leaders for quality, reliability, and
                    fast delivery.
                  </p>
                  <form onSubmit={handleSubscription}>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control  text-white bg-transparent border-white "
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button className="btn btn-light ms-2" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-12 text-md-center  text-lg-start col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
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
                    <Link to="/Contact" className="text-white">
                      Contact US
                    </Link>
                  </p>
                  <p>
                    <Link to="/TermsandConditions" className="text-white">
                      Terms & Condition
                    </Link>
                  </p>
                  <p>
                    <Link to="/PrivacyandPolicy" className="text-white">
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link to="/Contact" className="text-white">
                      FAQ
                    </Link>
                  </p>
                </div>

                <div className="col-md-12 text-md-center  text-lg-start col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                  <h6 className="text-uppercase fw-bold">OUR PRODUCTS</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/T" className="text-white">
                      Collared Neck
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-white">
                      Fleece CrewNeck
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-white">
                      Boat Neck
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-white">
                      Pullover Hoodies
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-white">
                      Swet Shorts
                    </Link>
                  </p>
                   <p>
                    <Link to="#!" className="text-white">
                     Mineral Wash
                    </Link>
                  </p>
                </div>

                <div className="col-md-12 text-md-center  text-lg-start col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
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
                    <i className="fas fa-phone mr-3"></i>  +1 949 283 9554
                  </p>
                
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-2">
            © 2025 |
            <Link className="text-white" to="https://home.paktex.com/">
              {" "}
              PTX
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
