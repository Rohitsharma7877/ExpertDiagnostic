import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
// import "./adminLogin.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "admin", // Default role set to admin
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials for both roles
    const adminCredentials = {
      username: "admin",
      password: "admin123",
    };

    const superAdminCredentials = {
      username: "superadmin",
      password: "super123",
    };

    if (
      credentials.role === "admin" &&
      credentials.username === adminCredentials.username &&
      credentials.password === adminCredentials.password
    ) {
      toast.success("Admin Login Successful!", { position: "top-right" });
      // Save role to localStorage
      localStorage.setItem("role", "admin");
      setTimeout(() => {
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      }, 1000);
    } else if (
      credentials.role === "superadmin" &&
      credentials.username === superAdminCredentials.username &&
      credentials.password === superAdminCredentials.password
    ) {
      toast.success("Super Admin Login Successful!", { position: "top-right" });
      // Save role to localStorage
      localStorage.setItem("role", "super-admin");
      setTimeout(() => {
        navigate("/admin/dashboard"); // Redirect to super admin dashboard
      }, 1000);
    } else {
      toast.error("Invalid credentials. Try again!", { position: "top-right" });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role:</label>
            <select
              name="role"
              value={credentials.role}
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle between password and text
                name="password"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminLogin;
