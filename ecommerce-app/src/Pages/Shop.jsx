import React, { useState } from "react";
import Image from "../Images/Image";
import { Link } from "react-router-dom";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const dummyProducts = [
  { id: 1, title: "T-Shirt1", category: "T-Shirt", price: 1299, image: Image.image1 },
  { id: 2, title: "T-Shirt2", category: "T-Shirt", price: 1499, image: Image.image2 },
  { id: 3, title: "T-Shirt3", category: "T-Shirt", price: 1799, image: Image.image3 },
  { id: 4, title: "T-Shirt4", category: "T-Shirt", price: 1799, image: Image.image4 },
  { id: 5, title: "T-Shirt5", category: "T-Shirt", price: 2199, image: Image.image5 },
  { id: 6, title: "T-Shirt6", category: "T-Shirt", price: 1499, image: Image.image6 },
  { id: 7, title: "T-Shirt7", category: "T-Shirt", price: 1799, image: Image.image7 },
  { id: 8, title: "T-Shirt8", category: "T-Shirt", price: 1799, image: Image.image8 },
  { id: 9, title: "T-Shirt9", category: "T-Shirt", price: 1350, image: Image.image9 },
  { id: 10, title: "T-Shirt10", category: "Fleece", price: 1599, image: Image.Fleece1 },
  { id: 11, title: "T-Shirt11", category: "Fleece", price: 1399, image: Image.Fleece2 },
  { id: 12, title: "T-Shirt12", category: "Fleece", price: 1599, image: Image.Fleece3 },
  { id: 13, title: "T-Shirt13", category: "Fleece", price: 1399, image: Image.Fleece4 },
  { id: 14, title: "T-Shirt14", category: "Fleece", price: 1599, image: Image.Fleece5 },
  { id: 15, title: "T-Shirt15", category: "Fleece", price: 1399, image: Image.Fleece6 },
  { id: 16, title: "T-Shirt16", category: "Fleece", price: 1599, image: Image.Fleece5 },
  { id: 17, title: "T-Shirt17", category: "Fleece", price: 1399, image: Image.Fleece6 },
  { id: 18, title: "T-Shirt18", category: "Fleece", price: 1599, image: Image.Fleece7 },
  { id: 19, title: "T-Shirt19", category: "Fleece", price: 1399, image: Image.Fleece8 },
  { id: 20, title: "T-Shirt20", category: "Kids", price: 1999, image: Image.image10 },
  { id: 21, title: "T-Shirt21", category: "Kids", price: 2299, image: Image.image11 },
  { id: 22, title: "T-Shirt22", category: "Kids", price: 1599, image: Image.image12 },
  { id: 23, title: "T-Shirt23", category: "Kids", price: 1999, image: Image.image13 },
  { id: 24, title: "T-Shirt24", category: "Kids", price: 1399, image: Image.image14 },
  { id: 25, title: "T-Shirt25", category: "Kids", price: 1599, image: Image.image15 },
  { id: 26, title: "T-Shirt26", category: "Kids", price: 1299, image: Image.image16 },
  { id: 27, title: "T-Shirt27", category: "Kids", price: 1899, image: Image.image17 },
  { id: 28, title: "T-Shirt28", category: "Kids", price: 1199, image: Image.image18 },
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState("T-Shirt");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = ["T-Shirt", "Fleece", "Kids"];

  const handleCheckboxChange = (category, name) => {
    const filterKey = `${category}-${name}`;
    setCheckedFilters((prev) =>
      prev.includes(filterKey)
        ? prev.filter((item) => item !== filterKey)
        : [...prev, filterKey]
    );
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
  };

  const filteredProducts = dummyProducts.filter((product) => {
    const filterKey = `${product.category}-${product.title}`;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (checkedFilters.length > 0) {
      return checkedFilters.includes(filterKey) && matchesSearch;
    }

    return product.category === activeCategory && matchesSearch;
  });

  return (
    <div className="container-fluid mt-5">
      {/* Toggle Button for Mobile */}
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
          className={`col-md-3 mb-4 ${isSidebarOpen ? "d-block" : "d-none d-md-block"}`}
        >
          <div className="p-3 bg-light rounded shadow-sm">
            <h5 className="mb-3">Filters</h5>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="accordion" id="filterAccordion">
              {categories.map((cat) => {
                const productsInCategory = dummyProducts.filter(
                  (p) => p.category === cat
                );
                const uniqueTitles = [
                  ...new Set(productsInCategory.map((p) => p.title)),
                ];

                return (
                  <div className="accordion-item border-0" key={cat}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button bg-white shadow-none ${
                          activeCategory === cat ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleCategoryClick(cat)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${cat}`}
                        aria-expanded={activeCategory === cat ? "true" : "false"}
                      >
                        {cat}
                      </button>
                    </h2>
                    <div
                      id={`collapse${cat}`}
                      className={`accordion-collapse collapse ${
                        activeCategory === cat ? "show" : ""
                      }`}
                      data-bs-parent="#filterAccordion"
                    >
                      <div className="accordion-body px-2 pt-2">
                        {uniqueTitles.map((title) => {
                          const filterKey = `${cat}-${title}`;
                          return (
                            <div key={filterKey}>
                              <div className="form-check">
                                <input
                                  className=" Historic check-input"
                                  type="checkbox"
                                  id={filterKey}
                                  checked={checkedFilters.includes(filterKey)}
                                  onChange={() => handleCheckboxChange(cat, title)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={filterKey}
                                >
                                  {title}
                                </label>
                              </div>
                              <hr className="my-2" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-9">
          <h3 className="mb-4">Products</h3>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className="card h-100 border-0 shadow-sm">
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
                        className="card-img-top bg-light catalog-image"
                        alt={product.title}
                        style={{ objectFit: "cover", height: "300px" }}
                      />
                    </Link>
                    <hr />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title catalog-title">{product.title}</h6>
                      <p className="text-muted small mb-1 catalog-title">{product.category}</p>
                      <p className="fw-semibold text-muted mb-2 catalog-title">PKR {product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}