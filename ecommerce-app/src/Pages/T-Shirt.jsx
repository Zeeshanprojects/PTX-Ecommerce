import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Home.css";

export default function TShirt() {
  useEffect(() => {
    document.title = "TShirts | Pakistan Textile Exchange";
  }, []);

  // Hardcoded products
 const [products] = useState([
  {
    title: "Classic White T-Shirt",
    price: 25,
    color: "green",
    image: Image.image1,
  },
  {
    title: "Black Premium Tee",
    price: 30,
     color: "yellow",
    image: Image.image2,
  },
  {
    title: "Graphic Print Tee",
    price: 35,
     color: "red",
    image: Image.image3,
  },
  {
    title: "Blue Casual T-Shirt",
    price: 28,
     color: "purple",
    image: Image.image4,
  },
   
]);

  return (
    <>
   
      {/* <div className="image-container">
        <img src={Image.Tshirts} alt="Tshirts" className="sub-banner-image" />
      </div> */}
      <div className="background">
        
   
      <div className="container-fluid p-5 ">
        <h1 className="fw-bold">MINERAL WASH </h1>
        <p className="mb-5">OUR PREMIUM QUALITY COLLECTION</p>

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
                 <div className="pt-2 ps-1 text-center">
                 
                  <h6 className="fw-bold">{product.title}</h6>
                  {/* <p className="text-muted mb-2">USD {product.price}</p> */}
                 <p className="tex-muted">Mineral Wash | {product.color}</p>
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
