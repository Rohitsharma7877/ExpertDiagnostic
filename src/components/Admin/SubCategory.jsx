import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import "./SubCategory.css";

const SubCategory = () => {
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
    <div className="SubCategory-main1">
      <div className="SubCategory-list-box1">
        <h1 className="SubCategory-titles">Sub-Category List Form</h1>

        <div className="SubCategory-input-box1">
          {/* Test No Input Field */}
          <div className="SubCategory-input-row">
            <div className="SubCategory-input-group">
              <label>Test No:</label>
              <input
                name="testNo"
                className="SubCategory-input-section"
                type="text"
                placeholder="Enter Test No"
              />
            </div>
          </div>

          {/* 1st Line: category select and add button */}
          <div className="SubCategory-input-row ">
            <div className="SubCategory-input-group">
              <label>Category:</label>
              <select name="category">
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="SubCategory-input-group">
              <label>Add Category:</label>
              <input
                name="addcategory"
                className="SubCategory-input-section"
                type="text"
                placeholder="Enter new category"
              />
            </div>
            <div className="SubCategory-input-group">
              <button className="add-button">+ Add</button>
            </div>
          </div>

          {/* 2nd Line: Upload Image & Title */}
          <div className="SubCategory-input-row ">
            <div className="SubCategory-input-group">
              <label>Upload Image:</label>
              <input
                name="uploadimage"
                className="SubCategory-input-section"
                type="file"
                accept="image/*"
              />
            </div>
            <div className="SubCategory-input-group">
              <label>Title:</label>
              <input
                name="title"
                className="SubCategory-input-section"
                type="text"
                placeholder="Enter title"
              />
            </div>
          </div>

          {/* 2nd Line: Upload Image & Title */}
          <div className="SubCategory-input-row ">
            <div className="SubCategory-input-group">
              <label>Price:</label>
              <input
                name="oldprice"
                className="SubCategory-input-section"
                type="text"
                placeholder="Enter Old Price"
                
              />
            </div>
            <div className="SubCategory-input-group">
              <label>Discounted Price:</label>
              <input
                name="title"
                className="SubCategory-input-section"
                type="text"
                placeholder="Enter Discounted Price"
              />
            </div>
          </div>


          <div className="SubCategory-input-row ">
            <div className="SubCategory-input-group">
              <label>Description:</label>
              <textarea
              name="description"
              value={""}
              placeholder="Enter description"
            ></textarea>
            </div>
            </div>


          {/* 3rd Line: Description */}
          {/* <div className="SubCategory-input-row ">
            <label>Description:</label>
            <textarea
              name="description"
              value={""}
              placeholder="Enter description"
            ></textarea>
          </div> */}

          {/* Last Line: Submit Button (Aligned to Right) */}
          <div className="SubCategory-submit-container">
            <button className="SubCategory-submit-button">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="SubCategory-box2"></div>
    </div>
  );
};

export default SubCategory;
