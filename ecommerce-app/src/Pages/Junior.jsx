import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Junior() {
  useEffect(() => {
    document.title = "Fleece | Pakistan Textile Exchange";
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/EcommerceFleece`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch fleece products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <div className="background">
        <div className="container-fluid p-5  ">
          <h1 className="fw-bold">JUNIOR</h1>
          <p className="mb-5">OUR PREMIUM QUALITY JUNIORS COLLECTION</p>
          <div className="row g-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"
              >
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
                        category: "Fleece",
                      }}
                    >
                      <img
                        src={product.image}
                        alt="image"
                        className="img-fluid product-img"
                      />
                    </Link>
                  </div>
                  <div className="p-3">
                    <h6 className="mb-1">{product.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
