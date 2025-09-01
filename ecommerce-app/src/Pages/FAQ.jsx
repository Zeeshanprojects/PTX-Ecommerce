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
            <h1 className="fw-bold">Frequently Asked Question</h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How do I place an order?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Simply browse our products, select the items you like,
                    choose size/quantity, and click “Add to Cart.” When ready,
                    go to your cart and proceed to checkout.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need an account to order?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    No, you can check out as a guest. However, creating an
                    account makes it easier to track orders, save your address,
                    and view your purchase history.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We accept all major credit and debit cards (Visa,
                    MasterCard, American Express, Discover) through Stripe. You
                    can also pay using Apple Pay and Google Pay.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do you offer free shipping?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, we offer free standard shipping within the U.S. on
                    orders above $50. For orders under $50, a small shipping fee
                    applies.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingFive"
                    aria-expanded="false"
                    aria-controls="headingFive"
                  >
                    How long will delivery take?
                  </button>
                </h2>
                <div
                  id="headingFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Standard delivery usually takes 3–7 business days. Express
                    shipping options are also available at checkout.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingSix"
                    aria-expanded="false"
                    aria-controls="headingSix"
                  >
                    Do you ship internationally?
                  </button>
                </h2>
                <div
                  id="headingSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Currently, we ship only within the United States.
                    International shipping will be added soon.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingSeven"
                    aria-expanded="false"
                    aria-controls="headingSeven"
                  >
                    How can I track my order?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once your order is shipped, you’ll receive a tracking link
                    by email or SMS to follow your package in real-time.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingeight">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingeight"
                    aria-expanded="false"
                    aria-controls="headingeight"
                  >
                    What is your return policy?
                  </button>
                </h2>
                <div
                  id="headingeight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can return unworn, unused items within 30 days of
                    delivery for a full refund or exchange. Items must be in
                    original condition with tags.{" "}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingnine">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingnine"
                    aria-expanded="false"
                    aria-controls="headingnine"
                  >
                    How long does a refund take?
                  </button>
                </h2>
                <div
                  id="headingnine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingnine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Refunds are processed within 5–7 business days after we
                    receive your returned item. The amount will be credited back
                    to your original payment method.{" "}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingten">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#headingten"
                    aria-expanded="false"
                    aria-controls="headingten"
                  >
                    Do you restock sold-out items?
                  </button>
                </h2>
                <div
                  id="headingten"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingten"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, popular items are often restocked. Sign up for restock
                    notifications on the product page to be the first to know.{" "}
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
