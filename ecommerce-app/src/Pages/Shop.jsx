import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Image from "../Images/Image";

export default function Shop() {
  useEffect(() => {
    document.title = "Catalog | Pakistan Textile Exchange";
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const categories = [
    "COLLARED NECK",
    "FLEECE CREWNECK",
    "BOATNECK",
    "PULLOVER HOODIES",
    "SWEAT SHORT",
    "MINERAL WASH",
  ];

  // Hardcoded products (mapped to imported images)
  const products = [
    { id: 1, title: "Collared Neck Shirt 1", category: "COLLARED NECK", price: 25, image: Image.image1 },
    { id: 2, title: "Collared Neck Shirt 2", category: "COLLARED NECK", price: 27, image: Image.image2 },
     { id: 3, title: "Collared Neck Shirt 3", category: "COLLARED NECK", price: 25, image: Image.image3 },
    { id: 4, title: "Collared Neck Shirt 4", category: "COLLARED NECK", price: 27, image: Image.image4 },
    { id: 5, title: "Collared Neck Shirt 5", category: "COLLARED NECK", price: 25, image: Image.image5 },
    { id: 6, title: "Collared Neck Shirt 6", category: "COLLARED NECK", price: 27, image: Image.image6 },
     { id: 7, title: "Collared Neck Shirt 7", category: "COLLARED NECK", price: 25, image: Image.image7 },
    { id: 8, title: "Collared Neck Shirt 8", category: "COLLARED NECK", price: 27, image: Image.image8 },
     { id: 9, title: "Collared Neck Shirt 9", category: "COLLARED NECK", price: 27, image: Image.image9 },
    // { id: 3, title: "Fleece Crewneck 1", category: "FLEECE CREWNECK", price: 30, image: Image.Fleece1 },
    // { id: 4, title: "Fleece Crewneck 2", category: "FLEECE CREWNECK", price: 32, image: Image.Fleece2 },
    // { id: 5, title: "Boatneck Top 1", category: "BOATNECK", price: 28, image: Image.Boat1 },
    // { id: 6, title: "Pullover Hoodie 1", category: "PULLOVER HOODIES", price: 35, image: Image.Hoodie1 },
    // { id: 7, title: "Sweat Short 1", category: "SWEAT SHORT", price: 18, image: Image.Short1 },
    // { id: 8, title: "Mineral Wash Tee 1", category: "MINERAL WASH", price: 22, image: Image.Mineral1 },
  ];

  const filteredProducts =
    activeFilters.length === 0
      ? products
      : products.filter((p) => activeFilters.includes(p.category));

  const handleFilterChange = (category) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter((c) => c !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };

  return (
    <div className="container-fluid mt-5">
      {/* Mobile toggle button */}
      <div className="d-md-none mb-3">
        <button
          className="btn btn-outline-dark w-100"
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div
          className={`col-md-3 mb-4 pe-2 ${isSidebarOpen ? "d-block" : "d-none d-md-block"}`}
        >
          <div className="p-2 border rounded">
            <h5 className="mb-3">Filters</h5>
            <div className="accordion" id="filterAccordion">
              {categories.map((cat) => (
                <div className="accordion-item border-0" key={cat}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-white shadow-none fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${cat.replace(/\s+/g, "")}`}
                    >
                      {cat}
                    </button>
                  </h2>
                  <div
                    id={`collapse${cat.replace(/\s+/g, "")}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body px-2 pt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`${cat}-opt`}
                          checked={activeFilters.includes(cat)}
                          onChange={() => handleFilterChange(cat)}
                        />
                        <label
                          className="form-check-label ms-2"
                          htmlFor={`${cat}-opt`}
                        >
                          Show {cat}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-9 p-0 m-0">
          <h3 className="mb-4">Products</h3>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className="h-100 border-0 position-relative">
                    <span className="new-badge position-absolute top-0 start-0 m-2">
                      SALE
                    </span>
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
                        className="card-img-top catalog-image"
                        alt={product.title}
                      />
                    </Link>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">{product.title}</h6>
                      <p className="text-muted small mb-1">
                        {product.category}
                      </p>
                      <p className="fw-semibold text-muted mb-2">
                        USD {product.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
