import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import axios from "axios";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { state } = useLocation();

  const products = state?.products || cart;

  const getTotal = () =>
    products.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      items: products,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/EcommerceCheckout",
        payload
      );

      if (response.status === 201) {
        setConfirmedData(payload);
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", address: "" });
        setCart([]); // Clear cart after order
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDownload = () => {
    const content = `
Order Confirmation

Name: ${confirmedData.name}
Email: ${confirmedData.email}
Phone: ${confirmedData.phone}
Address: ${confirmedData.address}

Items:
${confirmedData.items
  .map(
    (item) =>
      `${item.title} - Qty: ${item.quantity} - $${item.price} each`
  )
  .join("\n")}

Total: $${confirmedData.items.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )} USD
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "OrderConfirmation.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Billing Details */}
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
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && confirmedData && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header">
                <h5 className="modal-title">Order Confirmation</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Thank you <strong>{confirmedData.name}</strong>! Your order
                  has been placed.
                </p>
                <p>
                  A confirmation has been sent to{" "}
                  <strong>{confirmedData.email}</strong>.
                </p>

                <h6 className="mt-4">Shipping Details</h6>
                <p>
                  <strong>Phone:</strong> {confirmedData.phone}
                  <br />
                  <strong>Address:</strong> {confirmedData.address}
                </p>

                {confirmedData.items && (
                  <>
                    <h6 className="mt-4">Order Summary</h6>
                    <ul className="list-group mb-3">
                      {confirmedData.items.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <h6 className="my-0">{item.title}</h6>
                            <small className="text-muted">
                              Qty: {item.quantity}
                            </small>
                          </div>
                          <span className="text-muted">
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
                              total +
                              Number(item.price) * Number(item.quantity),
                            0
                          )}{" "}
                          USD
                        </strong>
                      </li>
                    </ul>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleDownload}>
                  Download Order Slip
                </button>
                <button
                  type="button"
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
