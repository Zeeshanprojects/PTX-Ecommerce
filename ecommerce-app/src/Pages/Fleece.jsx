import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function Fleece() {
  const products = [
    { id: 301, image: Image.Fleece1, title: "Fleece 1", price: 2199, category: "Fleece" },
    { id: 302, image: Image.Fleece2, title: "Fleece 2", price: 1999, category: "Fleece" },
    { id: 303, image: Image.Fleece3, title: "Fleece 3", price: 2099, category: "Fleece" },
    { id: 304, image: Image.Fleece4, title: "Fleece 4", price: 2199, category: "Fleece" },
    { id: 305, image: Image.Fleece5, title: "Fleece 5", price: 1999, category: "Fleece" },
    { id: 306, image: Image.Fleece6, title: "Fleece 6", price: 2099, category: "Fleece" },
    { id: 307, image: Image.Fleece7, title: "Fleece 7", price: 2199, category: "Fleece" },
    { id: 308, image: Image.Fleece8, title: "Fleece 8", price: 1999, category: "Fleece" },
  ];

  return (
    <>
      <div className="image-container">
        <img src={Image.Fleece} alt="Fleece" className="sub-banner-image" />
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
                  <p className="text-muted mb-1">PKR {product.price}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}