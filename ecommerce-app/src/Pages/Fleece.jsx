import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Image from "../Images/Image"; // make sure your images are exported properly

export default function Fleece() {
  useEffect(() => {
    document.title = "Fleece - PTX Ecommerce";
  });
  // Hardcoded products
  const [products] = useState([
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece1, 
      color: "Gainsboro",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece2,
      color: "Hunter Green",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece3,
      color: "Light Slate Gray",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece4,
      color: "Opera mauve",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECk",
      price: 10.99,
      image: Image.Fleece5,
      color: "Pale Silver",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece6,
      color: "Trolley Gray",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece7,
      color: "Black",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece8,
      color: "Lavender Purple",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece9, 
      color: "Light Blue",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece10,
        color: "Brown",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece11,
       color: "Jungle Green",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece12,
       color: "Han Blue",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece13,
        color: "Dim Gray",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece14,
      color: "Midnight Blue",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece15,
       color: "Pastal Brown",
      GSM: 180,
    },
    {
      title: "FLEECE CREWNECK",
      price: 10.99,
      image: Image.Fleece16,
       color: "Satin sheen gold",
      GSM: 180,
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece17,
      color: "Dark Green",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece18,
      color: "Iris",
      GSM: "180",
    },

  ]);

  const [searchTerm, setSearchTerm] = useState(""); // state for search

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="background">
        <div className="container-fluid p-lg-5 p-xl-5">
          <div
            className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-2"
            data-aos="fade-up"
          >
            {/* Title */}
            <h1 className="fw-bold m-0 category-heding mb-2 mb-md-0">
              FLEECE CREWNECK
            </h1>

            {/* Search Bar */}
            <div style={{ maxWidth: "500px", width: "100%" }}>
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <p className="mb-4" data-aos="fade-up">
            OUR PREMIUM QUALITY COLLECTION
          </p>

          {/* Product Grid */}
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"
                  data-aos="fade-up"
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
                          color: product.color,
                          GSM: product.GSM,
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
                      <div className="text-center">
                        <h6 className="mb-1 fw-bold">{product.title}</h6>
                        <p className="text-muted mb-1">USD {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <img
                  src={Image.sadface}
                  alt="sadface"
                  style={{ maxWidth: "150px" }}
                />
                <p className="text-muted">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
