import React, { useContext, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import axios from "axios";
import html2pdf from "html2pdf.js";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const { state } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);
  const slipRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [products, setProducts] = useState(state?.products || cart);

  const getTotal = () =>
    products.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownload = () => {
    html2pdf()
      .set({ filename: "order-confirmation.pdf" })
      .from(slipRef.current)
      .save();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      items: products,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/EcommerceCheckout`,
        payload
      );

      if (response.status === 201) {
        setConfirmedData(payload); // Store data for modal
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", address: "" });
        setProducts([]);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Billing Form */}
        <div className="col-md-6">
          <h4>Billing Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div class="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label " for="flexCheckDefault">
                  Cash on Delievery
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Stripe
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6 mt-5">
          <h4>Order Summary</h4>
          {products.length > 0 ? (
            <ul className="list-group mb-3">
              {products.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        marginRight: "10px",
                        borderRadius: "8px",
                      }}
                    />
                    <div>
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">Size: {item.size}</small>
                      <br />
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                  </div>
                  <span className="text-muted">
                    ${Number(item.price) * Number(item.quantity)} USD
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${getTotal()} USD</strong>
              </li>
            </ul>
          ) : (
            <p>No items in your order.</p>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && confirmedData && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-4">
              <div ref={slipRef}>
                <h4 className="text-center mb-4">🎉 Order Confirmation</h4>
                <p>
                  <strong>Name:</strong> {confirmedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {confirmedData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {confirmedData.phone}
                </p>
                <p>
                  <strong>Address:</strong> {confirmedData.address}
                </p>

                <hr />
                <h5>Order Summary</h5>
                <ul className="list-group mb-3">
                  {confirmedData.items.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        {item.title} (Qty: {item.quantity}, Size: {item.size})
                      </div>
                      <span>
                        ${Number(item.price) * Number(item.quantity)} USD
                      </span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>
                      $
                      {confirmedData.items.reduce(
                        (total, item) =>
                          total + Number(item.price) * Number(item.quantity),
                        0
                      )}{" "}
                      USD
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-primary me-2"
                  onClick={handleDownload}
                >
                  Download Confirmation PDF
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
