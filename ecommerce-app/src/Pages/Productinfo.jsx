import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import Image from "../Images/Image.js";
import "./Productinfo.css";

export default function Productinfo() {
  useEffect(() => {
    document.title = "ProductInformaiton | Paksitan Textile Exchange";
  });
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
    <div className="container-fluid p-0">
      <div className="row ">
        <div className="col-sm-6 col-md-12 col-lg-6 col-xl-6mb-4 mb-md-0">
          <div className="product-image-wrapper">
            {/* <img src={image} alt={title} className="img-fluid product-image" /> */}
            <img
              src={Image.image1}
              alt={title}
              className="img-fluid product-image"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
          <h1 className="fw-bold ms-3">{title}</h1>
          <h5 className="text-muted mb-3 ms-3">${price} USD</h5>
          <label className="me-3 fw-semibold ms-3">Sizes Available</label>
          <div className="buttons mt-2 mb-2">
            {["S", "M", "L", "XL", "2XL", "3XL"].map((sizeOption) => (
              <button
                key={sizeOption}
                type="button"
                className={`sizes btn ${
                  selectedSizes.includes(sizeOption)
                    ? "btn-dark"
                    : "btn-outline-dark"
                } me-2 ms-3 mb-3`}
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

          <p className="mb-2 text-justify mt-3 ms-3">
            This premium cotton Mineral Wash offers comfort and elegance for
            everyday wear. Designed with modern cuts and top-quality fabric,
            it’s perfect for casual or semi-formal occasions. The breathable
            fabric ensures you stay cool in warmer climates, while the durable
            stitching maintains shape and quality even after multiple washes.
          </p>

          <div className="d-flex align-items-center mb-4 mt-4">
            <label className="me-3 fw-semibold ms-3">Quantity:</label>
            <button onClick={decreaseQty} className="btn btn-outline-dark px-3">
              −
            </button>

            <span className="mx-4 ">{quantity}</span>

            <button onClick={increaseQty} className="btn btn-outline-dark px-3">
              +
            </button>
          </div>
          <div className="container p-1">
            <div className="row ">
              <div className="col-6">
                <button
                  onClick={handleBuyNow}
                  className="btn btn-success p-2 w-100"
                >
                  BUY NOW
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-dark p-2 w-100 "
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
