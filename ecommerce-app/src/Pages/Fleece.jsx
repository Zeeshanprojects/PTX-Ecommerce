import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function Fleece() {
  const products = [
    { image: Image.Fleece1, title: "Fleece 1", price: "PKR 2199" },
    { image: Image.Fleece2, title: "Fleece 2", price: "PKR 1999" },
    { image: Image.Fleece3, title: "Fleece 3", price: "PKR 2099" },
    { image: Image.Fleece4, title: "Fleece 4", price: "PKR 2199" },
    { image: Image.Fleece5, title: "Fleece 5", price: "PKR 1999" },
    { image: Image.Fleece6, title: "Fleece 6", price: "PKR 2099" },
    { image: Image.Fleece7, title: "Fleece 7", price: "PKR 2199" },
    { image: Image.Fleece8, title: "Fleece 8", price: "PKR 1999" },
  ];

  return (
    <>
      <div className="image-container">
        <img src={Image.Fleece} alt="men" className="sub-banner-image" />
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
