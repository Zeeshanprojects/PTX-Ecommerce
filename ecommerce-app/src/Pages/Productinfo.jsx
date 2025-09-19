import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import Image from "../Images/Image.js";
import "./Productinfo.css";

export default function Productinfo() {
  useEffect(() => {
    document.title = "Product Details | Pakistan Textile Exchange";
  }, []);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  if (!state) {
    console.log("No state provided, redirecting to home");
    navigate("/");
    return null;
  }

  const { id, image, title, price, color, GSM, category, colors } = state;

  // Local states
  const [quantity, setQuantity] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image);

  // Example color options (you can pass from CollaredNeck via state if needed)
  const colorOptions = colors || [];

  // Quantity handlers
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Size selection
  const handleSizeSelect = (sizeOption) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeOption)
        ? prev.filter((size) => size !== sizeOption)
        : [...prev, sizeOption]
    );
  };

  // Cart
  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      setShowSizeModal(true);
      return;
    }

    selectedSizes.forEach((size) => {
      const product = {
        id: `${id}-${size}`,
        image: selectedImage,
        title,
        price: Number(price),
        category,
        size,
        quantity,
      };
      addToCart(product);
    });

    navigate("/Cart");
  };

  // Buy now
  const handleBuyNow = () => {
    if (selectedSizes.length === 0) {
      setShowSizeModal(true);
      return;
    }

    const products = selectedSizes.map((size) => ({
      id: `${id}-${size}`,
      image: selectedImage,
      title,
      price: Number(price),
      category,
      size,
      quantity,
    }));

    navigate("/checkout", { state: { products } });
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          {/* Left: Product Image */}
          <div className="col-lg-6 mb-4 mb-md-0">
            <div className="product-image-wrapper">
              <img
                src={selectedImage}
                alt={title}
                className="img-fluid product-image"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="col-lg-6 p-3 info-right-column strict-spacing">
            <h3>{title}</h3>
            <h5 className="text-muted mb-3">USD {price}.00</h5>

            {/* Sizes */}
            <label className="me-3 fw-semibold">Sizes Available</label>
            <div className="buttons mt-3 mb-2">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  type="button"
                  className={`sizes btn ${
                    selectedSizes.includes(sizeOption)
                      ? "btn-dark"
                      : "btn-outline-dark"
                  } me-2 mb-3`}
                  onClick={() => handleSizeSelect(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
            </div>

            {selectedSizes.length > 0 && (
              <div className="mb-3 text-dark">
                Selected size{selectedSizes.length > 1 ? "s" : ""}:{" "}
                {selectedSizes.join(", ")}
              </div>
            )}

            {/* Description */}
            <p className="mb-2 text mt-2">
              This premium cotton Mineral Wash offers comfort and elegance for
              everyday wear. Designed with modern cuts and top-quality fabric,
              it’s perfect for casual or semi-formal occasions. The breathable
              fabric ensures you stay cool in warmer climates, while the durable
              stitching maintains shape and quality even after multiple washes.
            </p>

            {/* Colors */}
            <h6 className="fw-semibold mt-4">Colors Available</h6>
            <div className="d-flex flex-wrap align-items-center mt-3">
              {colorOptions.map((option, index) => (
                <button
                  key={index}
                  className={`color-circle ${
                    selectedImage === option.image ? "active" : ""
                  }`}
                  style={{ backgroundColor: option.hex }}
                  onMouseEnter={() => setSelectedImage(option.image)}
                  onClick={() => setSelectedImage(option.image)}
                  title={option.name}
                ></button>
              ))}
            </div>

            {/* Quantity */}
            <div className="d-flex align-items-center mb-4 mt-4">
              <label className="me-3 fw-semibold">Quantity:</label>
              <button
                onClick={decreaseQty}
                className="btn btn-outline-dark fw-bold quantity px-3"
              >
                <img src={Image.minus} alt="minus" className="icon" />
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                onClick={increaseQty}
                className="btn btn-outline-dark quantity px-3"
              >
                <img src={Image.add} alt="add" className="icon" />
              </button>
            </div>

            {/* Buttons + Product details */}
            <div className="container p-1">
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-dark w-100"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="details">
                  <label className="me-5 mt-3 fw-semibold">
                    Product Details
                  </label>
                  <ul className="mt-2 ps-3">
                    <li>Fit: Regular Fit</li>
                    <li>GSM: {GSM}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showSizeModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Size Required</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowSizeModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Please select at least one size before proceeding.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setShowSizeModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
