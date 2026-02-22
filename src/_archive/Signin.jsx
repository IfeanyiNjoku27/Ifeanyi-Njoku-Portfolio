// src/pages/Signin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./Pages_CSS/Contact.css";
import toast from "react-hot-toast";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/signin", formData);

      // Save token to LocalStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Welcome Back!");
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Signin error", error);
      toast.error("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className="contact-form" style={{ marginTop: "50px" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="form-submit-btn">
          Sign In
        </button>
      </form>
      <p style={{ marginTop: "20px", textAlign: "center", color: "black" }}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}
