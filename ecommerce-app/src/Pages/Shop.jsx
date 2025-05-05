import React, { useState } from 'react';
import Image from '../Images/Image';
import { Link } from 'react-router-dom';
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const dummyProducts = [
  { id: 1, name: 'T-Shirt1', category: 'Men', price: 1299, image: Image.image1 },
  { id: 2, name: 'T-Shirt2', category: 'Men', price: 1499, image: Image.image2 },
  { id: 3, name: 'T-Shirt3', category: 'Men', price: 1799, image: Image.image3 },
  { id: 4, name: 'T-Shirt4', category: 'Men', price: 1799, image: Image.image4 },
  { id: 5, name: 'T-Shirt5', category: 'Men', price: 2199, image: Image.image5},
  { id: 6, name: 'T-Shirt6', category: 'Men', price: 1499, image: Image.image6 },
  { id: 7, name: 'T-Shirt7', category: 'Men', price: 1799, image: Image.image7 },
  { id: 8, name: 'T-Shirt8', category: 'Men', price: 1799, image: Image.image8 },
  { id: 9, name: 'T-Shirt9', category: 'Women', price: 1350, image: Image.image9 },
  { id: 10, name: 'T-Shirt10', category: 'Women', price: 1599, image: Image.image5},
  { id: 11, name: 'T-Shirt11', category: 'Women', price: 1399, image: Image.image3 },
  { id: 12, name: 'T-Shirt12', category: 'Kids', price: 1999, image: Image.image10 },
  { id: 13, name: 'T-Shirt13', category: 'Kids', price: 2299, image: Image.image11 },
  { id: 14, name: 'T-Shirt14', category: 'Kids', price: 1599, image: Image.image12 },
  { id: 15, name: 'T-Shirt15', category: 'Kids', price: 1999, image: Image.image13 },
  { id: 16, name: 'T-Shirt16', category: 'Kids', price:1399, image: Image.image14 },
  { id: 16, name: 'T-Shirt17', category: 'Kids', price: 1599, image: Image.image15 },
  { id: 18, name: 'T-Shirt18', category: 'Kids', price: 1299, image: Image.image16 },
  { id: 19, name: 'T-Shirt19', category: 'Kids', price: 1899, image: Image.image17 },
  { id: 20, name: 'T-Shirt20', category: 'Kids', price: 1199, image: Image.image18 },
];

export default function Shop() {
  const [search, setSearch] = useState('');
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Men'); 


  const categories = ['Men', 'Women', 'Kids'];

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
    const filterKey = `${product.category}-${product.name}`;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

    if (checkedFilters.length > 0) {
      return checkedFilters.includes(filterKey) && matchesSearch;
    }

    // If no filter is selected, show only selected category
    return product.category === activeCategory && matchesSearch;
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="p-3">
            <h5 className="mb-3">Filters</h5>

            {/* Search */}
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Accordion with checkboxes */}
            <div className="accordion" id="filterAccordion">
              {categories.map((cat, index) => {
                const productsInCategory = dummyProducts.filter((p) => p.category === cat);
                const uniqueNames = [...new Set(productsInCategory.map((p) => p.name))];

                return (
                  <div className="accordion-item border-0" key={cat}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button bg-white shadow-none ${activeCategory === cat ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleCategoryClick(cat)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${cat}`}
                        aria-expanded={activeCategory === cat ? 'true' : 'false'}
                      >
                        {cat}
                      </button>
                    </h2>
                    <div
                      id={`collapse${cat}`}
                      className={`accordion-collapse collapse ${activeCategory === cat ? 'show' : ''}`}
                      data-bs-parent="#filterAccordion"
                    >
                      <div className="accordion-body px-2 pt-2">
                        {uniqueNames.map((name) => {
                          const filterKey = `${cat}-${name}`;
                          return (
                            <div className="form-check" key={filterKey}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={filterKey}
                                checked={checkedFilters.includes(filterKey)}
                                onChange={() => handleCheckboxChange(cat, name)}
                              />
                              <label className="form-check-label" htmlFor={filterKey}>
                                {name}
                              </label>
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

        {/* Product Grid */}
        <div className="col-md-9">
          <h3 className="mb-4">Products</h3>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ objectFit: 'cover', height: '320px' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="text-muted small mb-1">{product.category}</p>
                      <p className="fw-semibold mb-2">PKR {product.price}</p>
                      <button type="button" class="btn btn-outline-dark ">View Details</button>
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
