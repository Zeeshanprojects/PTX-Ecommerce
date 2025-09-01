import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Shop() {
  useEffect(() => {
    document.title = "Catalog | Pakistan Textile Exchange";
  });

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState("T-Shirt");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    "T-Shirt",
    "COLLARED NECK",
    "FLEECE CREWNECK",
    "BOATNECK",
    "PULLOVER HOODIES",
    "SWEAT SHORT",
    "MINERAL WADH",
  ];
  const baseURL = import.meta.env.VITE_API_URL;
  const apiEndpoints = {
    "T-Shirt": `${baseURL}/api/EcommerceTshirt`,
    Fleece: `${baseURL}/api/EcommerceFleece`,
    Kids: `${baseURL}/api/EcommerceKid`,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const allProducts = [];
        let idCounter = 1;

        for (const [category, url] of Object.entries(apiEndpoints)) {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${category} products`);
          }
          const data = await response.json();
          const categoryProducts = data.map((item) => ({
            id: idCounter++,
            title: item.title,
            category,
            price: parseFloat(item.price),
            image: item.image,
          }));
          allProducts.push(...categoryProducts);
        }

        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  const filteredProducts = products.filter((product) => {
    const filterKey = `${product.category}-${product.title}`;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (checkedFilters.length > 0) {
      return checkedFilters.includes(filterKey) && matchesSearch;
    }

    return product.category === activeCategory && matchesSearch;
  });

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
    <div className="container-fluid mt-5">
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
          className={`col-md-3 mb-4 pe-5 ${
            isSidebarOpen ? "d-block" : "d-none d-md-block"
          }`}
        >
          <div className="p-2  rounded shadow-sm">
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
                const productsInCategory = products.filter(
                  (p) => p.category === cat
                );
                const uniqueTitles = [
                  ...new Set(productsInCategory.map((p) => p.title)),
                ];

                return (
                  <div className="accordion-item border-0 " key={cat}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button bg-white shadow-none  fw-bold${
                          activeCategory === cat ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleCategoryClick(cat)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${cat}`}
                        aria-expanded={
                          activeCategory === cat ? "true" : "false"
                        }
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
                                  className="form-check-input"
                                  type="checkbox"
                                  id={filterKey}
                                  checked={checkedFilters.includes(filterKey)}
                                  onChange={() =>
                                    handleCheckboxChange(cat, title)
                                  }
                                />
                                <label
                                  className="form-check-label ms-3 "
                                  htmlFor={filterKey}
                                >
                                  {title}
                                </label>
                              </div>
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
        <div className="col-md-9 p-0 ">
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
                      <h6 className="card-title catalog-title">
                        {product.title}
                      </h6>
                      <p className="text-muted small mb-1 catalog-title">
                        {product.category}
                      </p>
                      <p className="fw-semibold text-muted mb-2 catalog-title">
                        USD {product.price}
                      </p>
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
