import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Productinfo.css'

export default function Productinfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!state) {
    // fallback in case someone visits directly
    navigate("/");
    return null;
  }

  const { image, title, price } = state;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
   
      <div className="col-md-6 mb-4 mb-md-0">
  <div className="product-image-wrapper">
    <img
      src={image}
      alt={title}
      className="img-fluid product-image"
    />
  </div>
</div>
        <div className="col-md-6 ">
          <h2 className="fw-bold">{title}</h2>
          
          <h5 className="text-muted mb-3">{price}</h5>
          <p className="mb-4">
            This premium cotton t-shirt offers comfort and elegance for everyday wear.
            Designed with modern cuts and top-quality fabric, it’s perfect for casual or semi-formal occasions.
          </p>

          <div className="d-flex align-items-center mb-3">
            <label className="me-3 fw-semibold">Quantity:</label>
            <button onClick={decreaseQty} className="btn btn-outline-secondary px-3">−</button>
            <span className="mx-3">{quantity}</span>
            <button onClick={increaseQty} className="btn btn-outline-secondary px-3">+</button>
          </div>

          <button className="btn btn-dark px-5 py-2">Add to Cart</button>

         
        </div>
        
      </div>
    </div>
  );
}
