import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../Images/Image";
import "./Home.css";

export default function TShirt() {
  useEffect(()=>{
    document.title="TShirts | Pakistan Textile Exchange"
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/EcommerceTshirt`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch T-shirts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <div className="image-container">
        <img src={Image.Tshirts} alt="Tshirts" className="sub-banner-image" />
      </div>

      <div className="container my-5">
        <div className="row g-4">
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
                      id: index,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: "Men",
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
                  <p className="text-muted mb-1">
                    USD {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
