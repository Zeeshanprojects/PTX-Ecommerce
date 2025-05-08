import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function TShirt() {
  const products = [
    { id: 101, image: Image.image1, title: "Red Kid Tee", price: 2199, category: "Men" },
    { id: 102, image: Image.image2, title: "Blue Boy Tee", price: 1999, category: "Men" },
    { id: 103, image: Image.image3, title: "Green Tee", price: 2099, category: "Men" },
    { id: 104, image: Image.image4, title: "Red Kid Tee", price: 2199, category: "Men" },
    { id: 105, image: Image.image5, title: "Black Boy Tee", price: 1999, category: "Men" },
    { id: 106, image: Image.image6, title: "Green Tee", price: 2099, category: "Men" },
    { id: 107, image: Image.image7, title: "Orange Kid Tee", price: 2199, category: "Men" },
    { id: 108, image: Image.image8, title: "Blue Boy Tee", price: 1999, category: "Men" },
    { id: 109, image: Image.image9, title: "Green Tee", price: 2099, category: "Men" },
  ];

  return (
    <>
      <div className="image-container">
        <img src={Image.Tshirts} alt="Men" className="sub-banner-image" />
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
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
                  <p className="fw-semibold text-muted mb-1">PKR {product.price}</p>
                 
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}