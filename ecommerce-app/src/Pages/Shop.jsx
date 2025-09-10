import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Image from "../Images/Image"; // make sure your images are exported properly

export default function Shop() {
  useEffect(() => {
    document.title = "Men - PTX Ecommerce";
  }, []);

  // Hardcoded products
  const [products] = useState([
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck1,
      color: "Onyx",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck2,
      color: "Oxford Blue",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck3,
      color: "Oxford Blue",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck4,
      color: "Cadmium Red",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck5,
      color: "Black",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck6,
      color: "Dark Ten",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck7,
      color: "Bone",
      GSM: "180",
    },
    {
      title: "Collared Neck",
      price: 10.99,
      image: Image.CollaredNeck8,
      color: "Shadow",
      GSM: "180",
    },

    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece1,
      color: "Gainsboro",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece2,
      color: "Hunter Green",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece3,
      color: "Light Slate Gray",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece4,
      color: "Opera mauve",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece5,
      color: "Pale Silver",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece6,
      color: "Trolley Gray",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece7,
      color: "Black",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece8,
      color: "Lavender Purple",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece9,
      color: "Light Blue",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece10,
      color: "Brown",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece11,
      color: " Jungle Green",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece12,
      color: "Han Blue",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece13,
      color: "Dim Gray",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece14,
      color: "Midnight Blue",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece15,
      color: "Pastel brown",
      GSM: "180",
    },
    {
      title: "Fleece",
      price: 10.99,
      image: Image.Fleece16,
      color: "Satin Sheen Gold",
      GSM: "180",
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

    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash1,
      color: "Green",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash2,
      color: "Straw",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash3,
      color: "Dark terra cotta",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash4,
      color: "Glaucous",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash5,
      color: "Onyx",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash6,
      color: "Grullo",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash7,
      color: "Trolley Gray",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash8,
      color: "True Blue",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash9,
      color: "Antique fuchsia",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash10,
      color: "Dark Gray",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash11,
      color: "Viridian",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash12,
      color: "Dark Jungle Green",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash13,
      color: "Medium Lavender Magenta",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash14,
      color: "Vivid auburn",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash15,
      color: "Tufts Blue",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash16,
      color: "Old Gold",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash17,
      color: "Pastel Brown",
      GSM: "180",
    },
    {
      title: "Mineral Wash",
      price: 10.99,
      image: Image.Mineralwash18,
      color: "Old Gold",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie1,
      color: "Gainsboro",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie2,
      color: "Myrtle",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie3,
      color: "Shadow",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie4,
      color: "Wisteria",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie5,
      color: "Grullo",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie6,
      color: "Pastal Brown",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie7,
      color: "Black",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie8,
      color: "Padtel Blue",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie9,
      color: "Pastel Purple",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie10,
      color: "Bistre",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie11,
      color: "Red",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie12,
      color: "Charcoal",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie13,
      color: "Maya Blue",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie14,
      color: "Dim Gray",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie15,
      color: "Midnight Blue",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie16,
      color: "Persian Indigo",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie17,
      color: "Goldenrod",
      GSM: "180",
    },
    {
      title: "Hoodie",
      price: 10.99,
      image: Image.Hoodie18,
      color: "Myrtle Green",
      GSM: "180",
    },
    {
      title: "Flannel Shirt",
      price: 10.99,
      image: Image.Shirt1,
      color: "Dark sienna",
      GSM: "180",
    },
    {
      title: "Sandow",
      price: 10.99,
      image: Image.Sandow1,
      color: "Prussian Blue",
      GSM: "180",
    },

    {
      title: "Short",
      price: 10.99,
      image: Image.Short1,
      color: "White",
      GSM: "180",
    },

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
      image: Image.Croptee4,
      color: "Drab",
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
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee7,
      color: "Denim",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee8,
      color: "Old Gold",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee9,
      color: "Shadow",
      GSM: 180,
    },
    {
      title: "Crop Tee",
      price: 10.99,
      image: Image.Croptee10,
      color: "Wine",
      GSM: 180,
    },

    {
      title: "Puffer",
      price: 10.99,
      image: Image.Puffer2,
      color: "Black",
      GSM: 180,
    },
  ]);

  // State for shuffled products
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // Shuffle products once when component loads
  useEffect(() => {
    const shuffleArray = (array) => {
      return [...array].sort(() => Math.random() - 0.5);
    };
    setShuffledProducts(shuffleArray(products));
  }, [products]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter on shuffled products
  const filteredProducts = shuffledProducts.filter((product) =>
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
              CATALOG
            </h1>

            {/* Search Bar */}
            <div style={{ maxWidth: "300px", width: "100%" }}>
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
          <div className="row g-3">
            {shuffledProducts.length === 0 ? (
              <p className="text-center">Loading products...</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"
                  data-aos="fade-up"
                >
                  <div className=" position-relative overflow-hidden rounded shadow-sm">
                    <span className="new-badge position-absolute top-0 start-0 m-2">
                      NEW
                    </span>
                    <div className="image-position position-relative">
                      <Link
                        to="/productinfo"
                        state={{
                          id: index,
                          title: product.title,
                          price: product.price,
                          image: product.image,
                          color: product.color,
                          GSM: product.GSM,
                          category: "Fleece",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="img-fluid shop-img"
                        />
                      </Link>
                    </div>
                    <div className="p-3 text-center">
                      <h6 className="mb-1 fw-bold">{product.title}</h6>
                      <p className="text-muted mb-1">USD {product.price}</p>
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
                <p className="text-muted mt-3">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
