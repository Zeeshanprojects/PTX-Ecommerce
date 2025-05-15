import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const { state } = useLocation();

  // Use products from navigation state (from Buy Now) or fall back to cart
  const products = state?.products || cart;

  const getTotal = () =>
    products.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );

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
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your full address"
                required
              ></textarea>
            </div>
           
          </form>
        </div>

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

          <button className="btn btn-primary w-100">Place Order</button>
        </div>
      </div>
    </div>
  );
}