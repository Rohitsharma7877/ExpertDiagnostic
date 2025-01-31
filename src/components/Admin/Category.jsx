import React, { useState, useEffect, useRef } from "react";
import "./Category.css";
import * as XLSX from "xlsx";

const Category = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [testNo, setTestNo] = useState("");
  const [categories, setCategories] = useState([
    "Lab Tests",
    "Radiology Tests",
    "Special Tests",
    "Expert care Package",
  ]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [editIndex, setEditIndex] = useState(null); // New state to track the index of the item being edited
  const formRef = useRef(null);


  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedCategoriesList = localStorage.getItem("categoriesList");
    if (storedCategoriesList) {
      setCategoriesList(JSON.parse(storedCategoriesList));
    }

    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

  // Save categoriesList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("categoriesList", JSON.stringify(categoriesList));
  }, [categoriesList]);

  // Save categories to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage({ file, preview: imageUrl });
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "" && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category || !testNo) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const formData = {
      testNo,
      image: image?.preview,
      title,
      description,
      category,
      newCategory,
    };

    if (editIndex !== null) {
      // If editing an existing item, update it
      const updatedList = [...categoriesList];
      updatedList[editIndex] = formData;
      setCategoriesList(updatedList);
      setEditIndex(null); // Reset edit index after updating
    } else {
      // If adding a new item, append it to the list
      setCategoriesList([...categoriesList, formData]);
    }

    // Reset form fields
    setImage(null);
    setTitle("");
    setDescription("");
    setCategory("");
    setNewCategory("");
    setTestNo("");
  };

  const handleEdit = (index) => {
    const selectedRow = categoriesList[index];
    setTestNo(selectedRow.testNo);
    setTitle(selectedRow.title);
    setDescription(selectedRow.description);
    setCategory(selectedRow.category);
    setNewCategory(selectedRow.newCategory);
    setImage({ preview: selectedRow.image });
    setEditIndex(index); // Set the index of the item being edited
  
    // Scroll to the form section smoothly
  formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDelete = (index) => {
    const updatedList = categoriesList.filter((_, i) => i !== index);
    setCategoriesList(updatedList);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(categoriesList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Categories");
    XLSX.writeFile(wb, "categories.xlsx");
  };

  return (
    <div className="ServiceList-main1">
      <div className="service-list-box1" ref={formRef}>
        <h1 className="service-titles">Category List Form</h1>

        <div className="service-input-box1">
          {/* Test No Input Field */}
          <div className="service-input-row">
            <div className="service-input-group">
              <label>Test No:</label>
              <input
                name="testNo"
                className="service-input-section"
                type="text"
                value={testNo}
                onChange={(e) => setTestNo(e.target.value)}
                placeholder="Enter Test No"
              />
            </div>
          </div>

          {/* 1st Line: category select and add button */}
          <div className="service-input-row ">
            <div className="service-input-group">
              <label>Category:</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="service-input-group">
              <label>Add Category:</label>
              <input
                name="addcategory"
                className="service-input-section"
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category"
              />
            </div>
            <div className="service-input-group">
              <button className="add-button" onClick={handleAddCategory}>
                + Add
              </button>
            </div>
          </div>

          {/* 2nd Line: Upload Image & Title */}
          <div className="service-input-row ">
            <div className="service-input-group">
              <label>Upload Image:</label>
              <input
                name="uploadimage"
                className="service-input-section"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="service-input-group">
              <label>Title:</label>
              <input
                name="title"
                className="service-input-section"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </div>
          </div>

          {/* 3rd Line: Description */}
          <div className="service-input-row ">
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Last Line: Submit Button (Aligned to Right) */}
          <div className=" submit-container">
            <button className="submit-button" onClick={handleSubmit}>
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="ServiceList-box2">
        <div className="ServiceList-fetch-container">
          <div className="ServiceList-fetch-title">Categories List</div>

          {/* Date Filter */}
          <div className="ServiceList-filter-container">
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="date-filter"
            />
          </div>

          {/* Search and Export Button in Right Side */}
          <div className="ServiceList-search-container">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="search-input"
            />

            <button className="excel-button" onClick={handleExportToExcel}>
              Export to Excel
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="ServiceList-fetch-table">
              <thead>
                <tr>
                  <th>Test No</th>
                  <th>Category</th>
                  <th>AddCategory</th>
                  <th>UploadImage</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categoriesList.map((categoriesinput, index) => (
                  <tr key={index}>
                    <td>{categoriesinput.testNo}</td>
                    <td>{categoriesinput.category}</td>
                    <td>{categoriesinput.newCategory}</td>
                    <td>
                      {categoriesinput.image ? (
                        <img
                          src={categoriesinput.image}
                          alt="Uploaded Preview"
                          className="category-image"
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td>{categoriesinput.title}</td>
                    <td>{categoriesinput.description}</td>
                    <td>
                      <div className="actions-container">
                        <button
                          className="edit-button"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;