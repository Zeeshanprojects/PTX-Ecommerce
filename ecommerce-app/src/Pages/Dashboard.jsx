import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../Images/Image";
import "./Dashboard.css"; // custom styles

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
    },
    {
      id: "#12346",
      date: "Aug 18, 2025",
      status: "Delivered",
      amount: "$85.00",
    },
    {
      id: "#12347",
      date: "Aug 10, 2025",
      status: "Processing",
      amount: "$42.50",
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
        <div className="col-md-4">
          <div className="card shadow-sm rounded profile-card h-100">
            <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
              <img
                src={Image.zeeshanpic}
                alt="Profile"
                className="rounded-circle mb-3 profile-img"
              />
              <h5 className="fw-bold text-dark">{user.name}</h5>
              <p className="text-muted small mb-2">{user.email}</p>

              <button className="btn btn-outline-dark w-100 mt-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="col-md-8">
          <div className="card shadow-sm rounded orders-card h-100">
            <div className="card-body">
              <h5 className="mb-4 fw-bold text-secondary">Recent Orders</h5>
              <div className="table-responsive">
                <table className="table align-middle table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="btn btn-outline-dark mt-3 px-4">
                View All Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

