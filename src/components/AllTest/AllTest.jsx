import React, { useState, useEffect } from "react";
import "./AllTest.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const AllTest = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Test");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const itemsPerPage = 8;

  const dummyData = [
    {
      id: 1,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Bio Chemistry",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 2,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Clinical Pathology",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 3,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Haematology",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 4,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Hormone Assays",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 5,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Histopathology",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 6,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Microbiology",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Lab Tests",
      // bookfor: "Available",
    },
    {
      id: 7,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "MRI",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Radiology Tests",
      // bookfor: "Available",
    },
    {
      id: 8,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "CT-Scan",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Radiology Tests",
      // bookfor: "Available",
    },
    {
      id: 9,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "X-Ray",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Radiology Tests",
      // bookfor: "Available",
    },
    {
      id: 10,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Ultrasonography",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Radiology Tests",
      // bookfor: "Available",
    },
    {
      id: 11,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "TMT",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 12,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "MRI Mammography",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 13,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Mammography",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 14,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "ECG",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 15,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "EEG",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 16,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Bone Density Test",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 17,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "PFT",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Special Tests",
      // bookfor: "Available",
    },
    {
      id: 18,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Silver Woman",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
    {
      id: 19,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Gold Woman",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
    {
      id: 20,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Dimond Woman",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
    {
      id: 21,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Kidney Health",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
    {
      id: 22,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Liver Health",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
    {
      id: 23,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Expert Heart Health",
      // originalPrice: "1500",
      // discountedPrice: "1100",
      description:
        "A quick lab test to analyze blood components for health insights. ",
      category: "Expert Care Package",
      // bookfor: "Available",
    },
  ];

  const dummyData2 = [
    {
      id: 1,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Albumin",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Bio Chemistry",
      bookfor: "Unavailable",
    },
    {
      id: 2,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "ammonia",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Bio Chemistry",
      bookfor: "Unavailable",
    },
    {
      id: 3,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Blood",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Bio Chemistry",
      bookfor: "Unavailable",
    },
    {
      id: 4,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Complete Urine Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Clinical Pathology",
      bookfor: "Unavailable",
    },
    {
      id: 5,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Albumin",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Clinical Pathology",
      bookfor: "Unavailable",
    },
    {
      id: 6,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Fasting Urine Sugar",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Clinical Pathology",
      bookfor: "Unavailable",
    },
    {
      id: 7,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Ascitic Fluid Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Haematology",
      bookfor: "Unavailable",
    },
    {
      id: 8,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Body Fluid Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Haematology",
      bookfor: "Unavailable",
    },
    {
      id: 9,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Bone Marrow",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Haematology",
      bookfor: "Unavailable",
    },
    {
      id: 10,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Anti Ds DNA",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Hormone Assays",
      bookfor: "Unavailable",
    },
    {
      id: 11,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Estradiol",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Hormone Assays",
      bookfor: "Unavailable",
    },
    {
      id: 12,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Free Testosterone",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Hormone Assays",
      bookfor: "Unavailable",
    },
    {
      id: 13,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Biopsy Small",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Histopathology",
      bookfor: "Unavailable",
    },
    {
      id: 14,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Biopsy large",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Histopathology",
      bookfor: "Unavailable",
    },
    {
      id: 15,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Biopsy MEDIUM",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Haematology",
      bookfor: "Unavailable",
    },
    {
      id: 8,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Body Fluid Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Microbiology",
      bookfor: "Unavailable",
    },
    {
      id: 8,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Body Fluid Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Microbiology",
      bookfor: "Unavailable",
    },
    {
      id: 8,
      image: "https://avrscancentre.com/img/service/blood-tests.png",
      title: "Body Fluid Analysis",
      originalPrice: "1200",
      discountedPrice: "900",
      description:
        "A quick lab test to analyze blood components for health insights.",
      category: "Lab Tests",
      Subcategory: "Microbiology",
      bookfor: "Unavailable",
    },
  ];

  const dummyCategories = [
    "All Test",
    "Lab Tests",
    "Radiology Tests",
    "Special Tests",
    "Expert Care Package",
  ];

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setData(dummyData);
        setCategories(dummyCategories);
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Test" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (searchQuery) {
      const newSuggestions = data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            item.title.toLowerCase() !== searchQuery.toLowerCase()
        )
        .map((item) => item.title);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, data]);

  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setSuggestions([]);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    const newData = dummyData2.filter(
      (item) => item.Subcategory === card.title
    );
    setSubCategoryData(newData);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCards = selectedCard
    ? subCategoryData.slice(firstIndex, lastIndex)
    : filteredData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    (selectedCard ? subCategoryData.length : filteredData.length) / itemsPerPage
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCard(null);
    setCurrentPage(1);
  };

  const handleAddToCart = (card) => {
    console.log("Added to cart:", card);
    // Add your logic for adding to cart here
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="alltest-wrapper">
      <div className="alltest-main1">
        <div className="alltest-box1">
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="alltest-box2">
          <div className="alltest-search-bar">
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <h2 className="dashboard-heading">
            {selectedCard ? selectedCard.title : selectedCategory}
          </h2>

          <div className="card-grid">
            {currentCards.map((card) => (
              <div
                className="card"
                key={card.id}
                onClick={() => handleCardClick(card)}
              >
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  {selectedCard && (
                    <>
                      <div className="card-price">
                        <span className="original-price">
                          <MdOutlineCurrencyRupee className="price-icon" />
                          {card.originalPrice}/-
                        </span>
                        <span className="discounted-price">
                          <MdOutlineCurrencyRupee className="price-icon discount-icon" />
                          {card.discountedPrice}/-
                        </span>
                      </div>
                      <div className="book-for">
                        <TiTick className="book-for-icon" />
                        <span className="book-for-text">
                          Home Collection: {card.bookfor}
                        </span>
                      </div>
                    </>
                  )}
                  <p className="card-description">{card.description}</p>
                  <div className="card-actions">
                    {selectedCard ? (
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(card)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button className="add-to-cart">Click Me</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              className="arrow-button"
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`page-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="arrow-button"
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTest;
