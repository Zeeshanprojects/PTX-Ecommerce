import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext.jsx";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const getTotal = () =>
    cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Billing Details */}
        <div className="col-md-6">
          <h4>Billing Information</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea className="form-control" rows="3" placeholder="Enter your full address" required></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-select" required>
                <option value="">Select a payment method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </div>
          </form>
        </div>

        {/* Order Summary */}
      {/* Order Summary */}
<div className="col-md-6">
  <h4>Order Summary</h4>
  <ul className="list-group mb-3">
    {cart.map((item) => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "80px", height: "80px", objectFit: "contain", marginRight: "10px", borderRadius: "8px" }}
          />
          <div>
            <h6 className="my-0">{item.title}</h6>
            <small className="text-muted">Qty: {item.quantity}</small>
          </div>
        </div>
        <span className="text-muted">PKR {Number(item.price) * Number(item.quantity)}</span>
      </li>
    ))}
    <li className="list-group-item d-flex justify-content-between">
      <strong>Total</strong>
      <strong>PKR {getTotal()}</strong>
    </li>
  </ul>

  <button className="btn btn-primary w-100">Place Order</button>
</div>

      </div>
    </div>
  );
}
