import React from "react";
import Image from "../Images/Image";
import "./Home.css";
export default function Home() {
  const products = [
    {
      id: 1,
      name: " Yellow",
      price: "PKR 1,999",
      image: Image.image1,
    },
    {
      id: 2,
      name: "Red",
      price: "PKR 2,299",
      image: Image.image2,
    },
    {
      id: 3,
      name: "Urban Black Shirt",
      price: "PKR 2,799",
      image: Image.image3,
    },
    {
      id: 4,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image4,
    },
    {
      id: 5,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image5,
    },
    {
      id: 6,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image6,
    },
    {
      id: 7,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image7,
    },
    {
      id: 8,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image8,
    },
    {
      id: 9,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image9,
    },
    {
      id: 10,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image10,
    },
    {
      id: 11,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image11,
    },
    {
      id: 12,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image12,
    },
    {
      id: 13,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image13,
    },
    {
      id: 14,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image14,
    },
    {
      id: 15,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image15,
    },
    {
      id: 16,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image16,
    },
    {
      id: 17,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image17,
    },
    {
      id: 18,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image18,
    },
    {
      id: 19,
      name: "Ocean Blue Tee",
      price: "PKR 2,499",
      image: Image.image19,
    },
  ];

  return (
    <>
      <div className="image-wrapper">
        <img src={Image.banner} alt="slider-image1" className="sliderimage" />
        <div className="imagetext">
          <button type="button" className="btn btn-outline-light mt-4 ">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="space"></div>
      <h2 className="text-center">FEATURED PRODUCT</h2>
      <div className="space"></div>
      <div className="container latest-products-section ">
        <div className="row">
          {/* Product 1 */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="product-box">
              <img
                src={Image.product1}
                className="product-image"
                alt="PTX Essential"
              />
              <div className="product-info">
                <h3 className="product-title">PTX Essential</h3>
                <p className="product-description">
                  Our wide range of quality premium essentials
                </p>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-sm-12 col-md-12 col-lg-4 ">
            <div className="product-box">
              <img
                src={Image.product2}
                className="product-image"
                alt="PTX Juniors"
              />
              <div className="product-info">
                <h3 className="product-title">PTX Juniors</h3>
                <p className="product-description">
                  Our new range of essentials for kids
                </p>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="product-box">
              <img
                src={Image.product3}
                className="product-image"
                alt="PTX Denim"
              />
              <div className="product-info">
                <h3 className="product-title">PTX Denim</h3>
                <p className="product-description">
                  Our collection of classic denim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>

      <h2 className="text-center uppercase">
        CURATED ESSENTIALS FOR A TIMELESS WARDROBE
      </h2>
      <p className="text-center">
        Complement your everyday style with timeless essential items
      </p>

      <div className="container my-5">
        <div className="row g-4">
          {products.map((product) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              key={product.id}
            >
              <div className="product-card position-relative overflow-hidden rounded shadow-sm">
                <span className="new-badge position-absolute top-0 start-0 m-2">
                  NEW
                </span>
                <div className="product-img-container position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid product-img"
                  />
                  <div className="product-overlay d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark btn-sm">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h6 className="mb-1">{product.name}</h6>
                  <p className="text-muted mb-1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>
      <div className="container-fluid p-0">
        <img src={Image.Fashion_Banner} alt="banner" className="banner" />
      </div>

      <div className="space"> </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-sm-4 col-lg-4 col-xl-4">
            <div className="info-box">
              <img src={Image.icon1} alt="icons" className="info-icon" />
              <h5>SUPPORT 24/7</h5>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4">
            <div className="info-box">
              <img src={Image.icon2} alt="icons" className="info-icon" />
              <h5>TRACK YOUR ORDER</h5>
              <p>Click for the quick update on your order</p>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 col-xl-4">
            <div className="info-box">
              <img src={Image.icon3} alt="icons" className="info-icon" />
              <h5>RETURN & EXCHANGES</h5>
              <p>Please view the return and exchange policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
