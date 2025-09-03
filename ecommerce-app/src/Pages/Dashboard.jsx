import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../Images/Image";
import "./Dashboard.css"; // custom styles
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = {
    name: "Zeeshan",
    email: "zeeshan.ali@paktex.com",
  };

  const orders = [
    {
      id: "#12345",
      date: "Aug 28, 2025",
      status: "Shipped",
      amount: "$120.00",
      payment: "Stripe",
    },
    {
      id: "#12346",
      date: "Aug 18, 2025",
      status: "Delivered",
      amount: "$85.00",
      payment: "Cash on Delivery",
    },
    {
      id: "#12347",
      date: "Aug 10, 2025",
      status: "Processing",
      amount: "$42.50",
      payment: "Stripe",
    },
  ];

  return (
    <div className="dashboard-container container-fluid py-4 px-3">
      {/* Header */}
      <div className="dashboard-header mb-4 p-4 shadow-sm rounded bg-white d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h2 className="mb-2 mb-md-0 text-dark fw-bold">Welcome, {user.name}</h2>
        <button className="btn btn-danger px-4 py-2">Logout</button>
      </div>

      <div className="row g-4">
        {/* Profile Section */}
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="card shadow-sm rounded profile-card h-100">
            <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
              <img
                src={Image.zeeshanpic}
                alt="Profile"
                className="rounded-circle mb-3 profile-img"
              />
              <h5 className="fw-bold text-dark">{user.name}</h5>
              <p className="text-muted small mb-2">{user.email}</p>
            </div>
            <Link to="/profile" className="prifile-btn">
              <button type="button" className="btn btn-outline-dark w-75  ">
                {" "}
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        {/* Orders Section */}
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="card shadow-sm rounded orders-card h-100">
            <div className="card-body">
              <h5 className="mb-4 fw-bold text-secondary">My Orders</h5>
              <div className="table-responsive">
                <table className="table align-middle table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td className="fw-semibold">{order.id}</td>
                        <td>{order.date}</td>
                        <td>
                          <span
                            className={`badge px-3 py-2 rounded-pill ${
                              order.status === "Delivered"
                                ? "bg-success"
                                : order.status === "Shipped"
                                ? "bg-info text-dark"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="fw-bold">{order.amount}</td>
                        <td>
                          <span
                            className={`badge px-3 py-2 rounded-pill ${
                              order.payment === "Stripe"
                                ? "bg-primary"
                                : "bg-dark"
                            }`}
                          >
                            {order.payment}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
