import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext.jsx";
import Image from "../Images/Image.js";
import "./Productinfo.css";

export default function Productinfo() {
  useEffect(() => {
    document.title = "Product Derails | Paksitan Textile Exchange";
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showSizeModal, setShowSizeModal] = useState(false); // modal state
  const { id, image, title, price, color, GSM, category  } = state;
  if (!state) {
    console.log("No state provided, redirecting to home");
    navigate("/");
    return null;
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleSizeSelect = (sizeOption) => {
    setSelectedSizes((prev) => {
      const newSizes = prev.includes(sizeOption)
        ? prev.filter((size) => size !== sizeOption)
        : [...prev, sizeOption];
      return newSizes;
    });
  };

  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      setShowSizeModal(true); // show modal instead of alert
      return;
    }

    selectedSizes.forEach((size) => {
      const product = {
        id: `${id}-${size}`,
        image,
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

  const handleBuyNow = () => {
    if (selectedSizes.length === 0) {
      setShowSizeModal(true); // show modal instead of alert
      return;
    }

    const products = selectedSizes.map((size) => ({
      id: `${id}-${size}`,
      image,
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
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4 mb-md-0">
            <div className="product-image-wrapper">
              <img
                src={image}
                alt={title}
                className="img-fluid product-image"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-0 p-3 info-right-column strict-spacing">
            <h6 className=" mt-3 text-muted">Men</h6>
            <h3 className="">{title}</h3>
            <h5 className="text-muted mb-3 ">USD {price}.00 </h5>
            <label className="me-3 fw-semibold ">Sizes Available</label>
            <div className="buttons mt-3 mb-2">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  type="button"
                  className={`sizes btn ${
                    selectedSizes.includes(sizeOption)
                      ? "btn-dark"
                      : "btn-outline-dark"
                  } me-2  mb-3`}
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

            <p className="mb-2 text mt-2">
              This premium cotton Mineral Wash offers comfort and elegance for
              everyday wear. Designed with modern cuts and top-quality fabric,
              it’s perfect for casual or semi-formal occasions. The breathable
              fabric ensures you stay cool in warmer climates, while the durable
              stitching maintains shape and quality even after multiple washes.
            </p>

            <div className="d-flex align-items-center mb-4 mt-4">
              <label className="me-3 fw-semibold ">Quantity:</label>
              <button
                onClick={decreaseQty}
                className="btn btn-outline-dark fw-bold quantity px-3"
              >
                <img src={Image.minus} alt="minus" className="icon" />
              </button>
              <span className="mx-4 ">{quantity}</span>
              <button
                onClick={increaseQty}
                className="btn btn-outline-dark quantity px-3"
              >
                <img src={Image.add} alt="add" className="icon" />
              </button>
            </div>

            <div className="container p-1">
              <div className="row ">
                <div className="col-12 ">
                  <button
                    className="btn btn-dark  w-100 "
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="details">
                  <label className="me-5 mt-3 fw-semibold ">
                    Product Details
                  </label>
                  <ul className="mt-2 ps-3 ">
                    <li>Color: {color}</li>
                    <li>Fit: Regulr Fit</li>
                    <li>GSM: {GSM}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
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
