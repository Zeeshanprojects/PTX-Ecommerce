import { useEffect } from "react";
import React from "react";
import "./faq.css";
export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | Pakitan Tetile Exchange";
  });
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h1 className="fw-bold">Wholesale account info</h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Who can get a Wholesale account?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Wholesale pricing is available to specific businesses. To
                    qualify for wholesale pricing, you must be in one of the
                    industries listed below: – Printer – Embroiderer –
                    Merchandise – Uniform – Promotional
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I setup a wholesale account
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    1. Click 'CREATE AN ACCOUNT' in top right hand corner.
                    2. Complete the application form
                    3. A login for our website will be created automatically (with default, retail pricing) – An account manager will review your pricing eligibility and be touch within 24 hours
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   Is there a regular spend needed to qualify and retaina wholesale account
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   The required spend to retain a wholesale account is $250 USD per month. Account pricing is re-evaluated at the start of each financial year.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
