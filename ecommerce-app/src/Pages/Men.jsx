import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function Men() {
  const products = [
    { image: Image.image1, title: "Red Kid Tee", price: "PKR 2199" },
    { image: Image.image2, title: "Blue Boy Tee", price: "PKR 1999" },
    { image: Image.image3, title: "Green Tee", price: "PKR 2099" },
    { image: Image.image4, title: "Red Kid Tee", price: "PKR 2199" },
    { image: Image.image5, title: "black Boy Tee", price: "PKR 1999" },
    { image: Image.image6, title: "Green Tee", price: "PKR 2099" },
    { image: Image.image7, title: "orange Kid Tee", price: "PKR 2199" },
    { image: Image.image8, title: "Blue Boy Tee", price: "PKR 1999" },
    { image: Image.image9, title: "Green Tee", price: "PKR 2099" },
  ];

  return (
    <>
      <div className="image-container">
        <img src={Image.Men} alt="men" className="sub-banner-image" />
      </div>

      <div className="container my-5 ">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="product-card position-relative overflow-hidden rounded shadow-sm">
                <span className="new-badge position-absolute top-0 start-0 m-2">
                  NEW
                </span>
                <div className="product-img-container position-relative">
                  <Link
                    to="/productinfo"
                    state={{
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid product-img"
                    />
                  </Link>
                </div>
                <div className="p-3">
                  <h6 className="mb-1">{product.title}</h6>
                  <p className="text-muted mb-1">{product.price}</p>
                  <div className="buttons ">
                    <button type="button" className="sizes btn-outline-dark">
                      S
                    </button>
                    <button type="button" className="sizes btn-outline-dark">
                      M
                    </button>
                    <button type="button" className="sizes btn-outline-dark">
                      L
                    </button>
                    <button type="button" className="sizes btn-outline-dark">
                      XL
                    </button>
                    <button type="button" className="sizes btn-outline-dark">
                      2XL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
