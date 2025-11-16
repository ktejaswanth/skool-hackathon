import React, { useState } from "react";
import api from "../Router/api";
import "../comp_css/AddProduct.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    imageUrl: "",
    description: "",
    price: 0,
    category: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // parse numeric value for price field
    if (name === "price") {
      const num = parseFloat(value);
      setProduct({ ...product, [name]: isNaN(num) ? 0 : num });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic client-side validation to match backend constraints
    if (!product.name || product.name.trim() === "") {
      alert("Product name is required");
      return;
    }
    if (!product.imageUrl || product.imageUrl.trim() === "") {
      alert("Image URL is required");
      return;
    }
    if (!product.description || product.description.length < 10) {
      alert("Description must be at least 10 characters");
      return;
    }
    if (product.description.length > 50) {
      alert("Description must be at most 50 characters");
      return;
    }
    if (product.price === null || product.price === undefined) {
      alert("Price is required");
      return;
    }
    if (!product.category || product.category.trim() === "") {
      alert("Category is required");
      return;
    }

    try {
      const response = await api.post("/ecom/products/add", product);
      console.log("Product added successfully:", response.data);
      setProduct({
        name: "",
        imageUrl: "",
        description: "",
        price: 0,
        category: "",
        available: true,
      });
      alert("Product Added Successfully......");
      // Redirect to the admin page after successful submission
      navigate("/admin");
    } catch (error) {
      const msg = error?.response?.data?.message || error?.response?.data || error.message;
      alert(msg || "Failed to add product");
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="adminAddProduct">
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
          <option value="classic flavours">Classic flavours</option>
          <option value="premium flavours">Premium flavours</option>
          <option value="seasonal flavours">Seasonal flavours</option>
          <option value="cones and bars">Cones and Bars</option>
          <option value="fruit based flavours">Fruit based flavours</option>
          </select>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
