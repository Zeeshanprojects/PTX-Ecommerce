import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import axios from "axios";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const { state } = useLocation();

  const products = state?.products || cart;

  const getTotal = () =>
    products.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );

  // Step 1: Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Step 2: Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 3: Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/EcommerceCheckout", formData);
      if (response.status === 201) {
        setSuccessMessage("Information saved successfully!");
        setFormData({ name: "", email: "", phone: "", address: "" });
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
        {/* Billing Details */}
        <div className="col-md-6">
          <h4>Billing Information</h4>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
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
        <div className="col-md-6">
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
    </div>
  );
}
