import React, { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import "./Productinfo.css";

export default function Productinfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState([]); // Track multiple sizes

  if (!state) {
    console.log("No state provided, redirecting to home");
    navigate("/");
    return null;
  }

  const { id, image, title, price, category } = state;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleSizeSelect = (sizeOption) => {
    setSelectedSizes((prev) => {
      const newSizes = prev.includes(sizeOption)
        ? prev.filter((size) => size !== sizeOption)
        : [...prev, sizeOption];
      console.log("Selected sizes:", newSizes);
      console.log(
        "Button class for",
        sizeOption,
        ":",
        newSizes.includes(sizeOption) ? "btn-dark" : "btn-outline-dark"
      );
      return newSizes;
    });
  };

  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      alert("Please select at least one size.");
      console.log("No sizes selected");
      return;
    }

    // Create a cart entry for each selected size
    selectedSizes.forEach((size) => {
      const product = {
        id: `${id}-${size}`, // Unique ID per size
        image,
        title,
        price: Number(price), // Ensure price is a number
        category,
        size,
        quantity,
      };
      console.log("Adding to cart:", product);
      addToCart(product);
    });

    navigate("/Cart");
  };

  const handleBuyNow = () => {
    if (selectedSizes.length === 0) {
      alert("Please select at least one size.");
      console.log("No sizes selected");
      return;
    }

    // Create an array of products for each selected size
    const products = selectedSizes.map((size) => ({
      id: `${id}-${size}`, // Unique ID per size
      image,
      title,
      price: Number(price), // Ensure price is a number
      category,
      size,
      quantity,
    }));

    // Navigate to Checkout with the selected products
    navigate("/checkout", { state: { products } });
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="product-image-wrapper">
            <img src={image} alt={title} className="img-fluid product-image" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{title}</h2>
          <h5 className="text-muted mb-3">${price} USD</h5>
          <label className="me-3 fw-semibold">Sizes:</label>
          <div className="buttons mt-2 mb-2">
            {["S", "M", "L", "XL", "2XL"].map((sizeOption) => (
              <button
                key={sizeOption}
                type="button"
                className={`sizes btn ${
                  selectedSizes.includes(sizeOption)
                    ? "btn-dark"
                    : "btn-outline-dark"
                } me-2`}
                onClick={() => handleSizeSelect(sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>

          {/* Show selected sizes as text */}
          {selectedSizes.length > 0 && (
            <div className="mb-3 text-success">
              Selected size{selectedSizes.length > 1 ? "s" : ""}:{" "}
              {selectedSizes.join(", ")}
            </div>
          )}

          <p className="mb-2">
            This premium cotton t-shirt offers comfort and elegance for everyday
            wear. Designed with modern cuts and top-quality fabric, it’s perfect
            for casual or semi-formal occasions.
          </p>
          <div className="d-flex align-items-center mb-3">
            <label className="me-3 fw-semibold">Quantity:</label>
            <button
              onClick={decreaseQty}
              className="btn btn-outline-secondary px-3"
            >
              −
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={increaseQty}
              className="btn btn-outline-secondary px-3"
            >
              +
            </button>
          </div>
          <div className="container">
            <div className="row g-2">
              <button
                onClick={handleBuyNow}
                className="btn btn-success px-5 py-2 w-100"
              >
                BUY NOW
              </button>
              <button
                className="btn btn-dark px-5 py-2 w-100"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
