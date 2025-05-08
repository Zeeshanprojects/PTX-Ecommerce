import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function Kids() {
  const products = [
    { id: 201, image: Image.image10, title: "Red Kid Tee", price: 2199, category: "Kids" },
    { id: 202, image: Image.image11, title: "Blue Boy Tee", price: 1599, category: "Kids" },
    { id: 203, image: Image.image12, title: "Green Tee", price: 1299, category: "Kids" },
    { id: 204, image: Image.image13, title: "Red Kid Tee", price: 1899, category: "Kids" },
    { id: 205, image: Image.image14, title: "Black Boy Tee", price: 1799, category: "Kids" },
    { id: 206, image: Image.image15, title: "Green Tee", price: 999, category: "Kids" },
  ];

  return (
    <>
      <div className="image-container">
        <img src={Image.Kids} alt="Kids" className="sub-banner-image" />
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
              <div className="product-card position-relative overflow-hidden rounded shadow-sm">
                <span className="new-badge position-absolute top-0 start-0 m-2">
                  NEW
                </span>
                <div className="product-img-container position-relative">
                  <Link
                    to="/productinfo"
                    state={{
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
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
                  <p className="text-muted mb-1">PKR {product.price}</p>
                  <div className="buttons">
                    <button type="button" className="sizes btn-outline-dark">S</button>
                    <button type="button" className="sizes btn-outline-dark">M</button>
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