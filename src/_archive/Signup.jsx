import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./Pages_CSS/Contact.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/signup", formData);
      alert("Registration successful! Please sign in.");
      navigate("/signin"); // Redirect to Sign In page
    } catch (err) {
      console.error(err);
      alert("Registration failed. Email might already be in use.");
    }
  };

  return (
    <div className="contact-form" style={{ marginTop: "50px" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
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
          Register
        </button>
      </form>
      <p style={{ marginTop: "20px", textAlign: "center", color: "black" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}
