import React, { useState } from 'react';
import Image from '../Images/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const dummyProducts = [
  // Men
  { id: 1, name: 'Men T-Shirt1', category: 'Men', price: 29, image: Image.image1},
  { id: 2, name: 'Men T-Shirt2', category: 'Men', price: 49, image:  Image.image2 },
  { id: 3, name: 'Men T-Shirt3', category: 'Men', price: 79, image:  Image.image3},
  { id: 4, name: 'Men T-Shirt4', category: 'Men', price: 79, image:  Image.image4},
  { id: 5, name: 'Men T-Shirt1', category: 'Men', price: 29, image: Image.image5},
  { id: 6, name: 'Men T-Shirt2', category: 'Men', price: 49, image:  Image.image6 },
  { id: 7, name: 'Men T-Shirt3', category: 'Men', price: 79, image:  Image.image7},
  { id: 8, name: 'Men T-Shirt4', category: 'Men', price: 79, image:  Image.image8},
  { id: 9, name: 'Men T-Shirt1', category: 'Men', price: 29, image: Image.image9},
  


  // Women
  { id: 5, name: 'Women Top', category: 'Women', price: 35, image: Image.image8 },
  { id: 6, name: 'Women Dress', category: 'Women', price: 59, image: Image.image4 },
  { id: 7, name: 'Women Skirt', category: 'Women', price: 39, image: Image.im },

  // Kids
  { id: 8, name: 'Kids T-Shirt', category: 'Kids', price: 19, image: 'https://via.placeholder.com/300x350?text=Kids+T-Shirt' },
  { id: 9, name: 'Kids Hoodie', category: 'Kids', price: 29, image: 'https://via.placeholder.com/300x350?text=Kids+Hoodie' },
  { id: 10, name: 'Kids Shorts', category: 'Kids', price: 15, image: 'https://via.placeholder.com/300x350?text=Kids+Shorts' },
];

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['Men', 'Women', 'Kids'];

  const filteredProducts = dummyProducts.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category;
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="p-3 border rounded shadow-sm bg-white">
            <h5 className="mb-3">Filters</h5>

            {/* Search */}
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Accordion */}
            <div className="accordion" id="categoryAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${category === 'All' ? '' : 'collapsed'}`}
                    onClick={() => setCategory('All')}
                    type="button"
                  >
                    All Products
                  </button>
                </h2>
              </div>

              {categories.map((cat) => {
                const productsInCategory = dummyProducts.filter((p) => p.category === cat);
                return (
                  <div className="accordion-item" key={cat}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${category === cat ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${cat}`}
                        onClick={() => setCategory(cat)}
                      >
                        {cat}
                      </button>
                    </h2>
                    <div
                      id={`collapse${cat}`}
                      className={`accordion-collapse collapse ${category === cat ? 'show' : ''}`}
                      data-bs-parent="#categoryAccordion"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled mb-0">
                          {productsInCategory.map((product) => (
                            <li key={product.id}>• {product.name}</li>
                          ))}
                        </ul>
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
                      style={{ objectFit: 'cover', height: '300px' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="text-muted small">{product.category}</p>
                      <p className="fw-semibold mb-2">${product.price}</p>
                      {/* <button className="btn btn-outline-dark btn-sm mt-auto">
                        Add to Cart
                      </button> */}
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
