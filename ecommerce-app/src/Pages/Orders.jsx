import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Orders() {
  const { id } = useParams();

  // Dummy order data (later replace with API call)
  const orders = [
    {
      id: "12345",
      date: "Aug 28, 2025",
      status: "Shipped",
      amount: "$120.00",
      payment: "Stripe",
      items: [
        { name: "T-Shirt", qty: 2, price: "$40" },
        { name: "Jeans", qty: 1, price: "$40" },
      ],
    },
    {
      id: "12346",
      date: "Aug 18, 2025",
      status: "Delivered",
      amount: "$85.00",
      payment: "Cash on Delivery",
      items: [{ name: "Shoes", qty: 1, price: "$85" }],
    },
    {
      id: "12347",
      date: "Aug 10, 2025",
      status: "Processing",
      amount: "$42.50",
      payment: "Stripe",
      items: [{ name: "Cap", qty: 5, price: "$8.50" }],
    },
  ];

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return <h2 className="text-center mt-5">Order not found!</h2>;
  }

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="fw-bold text-dark mb-3">Order Details</h3>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Amount:</strong> {order.amount}</p>
        <p><strong>Payment:</strong> {order.payment}</p>

        <h5 className="mt-4">Items</h5>
        <ul className="list-group mb-3">
          {order.items.map((item, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              <span>{item.name} (x{item.qty})</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>

        <Link to="/dashboard" className="btn btn-dark">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
