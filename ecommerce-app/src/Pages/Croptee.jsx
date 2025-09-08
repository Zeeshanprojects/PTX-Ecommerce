import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Image from "../Images/Image"; // make sure your images are exported properly

export default function Croptee() {
    useEffect(()=>{
      document.title="Crop Tee - PTX Ecommerce"
    })
  // Hardcoded products
  const [products] = useState([
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee1,
      color: "Grullo",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee2,
       color: "Sky Mangenta",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee3,
        color: "Onyx",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee5,
        color: "Cardinal", 
        GSM: 180,      
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee6,
       color: "Jungle Green", 
        GSM: 180,  
    },
    {
      title: "Crop Teer ",
      price: 10.99,
      image: Image.Croptee7,
       color: "Denim", 
        GSM: 180 ,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee8,
       color: "Old Gold", 
        GSM: 180 ,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee9,
       color: "Shadow", 
        GSM: 180 ,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee10,
       color: "Wine", 
        GSM: 180 ,
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
        <div className="container-fluid p-5">
          <div
            className="d-flex align-items-center justify-content-between mb-2"
            data-aos="fade-up"
          >
            {/* Title */}
            <h1 className="fw-bold m-0">CROP TEE</h1>

            {/* Search Bar */}
            <div style={{ maxWidth: "300px", width: "100%" }}>
              <input
                type="text"
                className="form-control"
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
                          color: product.color,
                          GSM:product.GSM,
                          category: "Fleece",
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
