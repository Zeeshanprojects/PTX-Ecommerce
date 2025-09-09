import React, { useContext, useEffect } from "react";
import { CartContext } from "../Components/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  useEffect(() => {
    document.title = "Cart | Pakistan Textile Exchange";
  });
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotal = () =>
    cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );

  if (!cart || cart.length === 0) {
    return (
      <div className=" py-5 text-center ">
        <h2>EMPTY CART</h2>
        <Link to="/" className="btn btn-outline-dark mt-3">
          SHOP NOW
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Title</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.size}</td>
                <td>USD {Number(item.price)}</td>
                <td>{item.quantity}</td>
                <td>USD {Number(item.price) * Number(item.quantity)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <h4>Total: USD {getTotal()}$</h4>
        <Link to="/Shop">
          <button className="btn btn-primary mt-3 me-2">
            Continue Shopping
          </button>
        </Link>
        <Link to="/checkout">
          <button className="btn btn-success mt-3">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
