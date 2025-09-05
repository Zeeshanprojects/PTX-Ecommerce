import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Image from "../Images/Image"; // make sure your images are exported properly

export default function CollaredNeck() {
  // Hardcoded products
  const [products] = useState([
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck1, // replace with your actual image path
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck8,
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck3,
    },
    {
      title: "Collared Neck",
      price:10.99,
      image: Image.CollaredNeck4,
    },
     {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck5, // replace with your actual image path
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck6,
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck7,
    },
    {
      title:"Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck2,
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
            <h1 className="fw-bold m-0">COLLARED NECK</h1>

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
                <img src={Image.sadface} alt="sadface" style={{ maxWidth: "150px" }} />
                <p className="text-muted">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
