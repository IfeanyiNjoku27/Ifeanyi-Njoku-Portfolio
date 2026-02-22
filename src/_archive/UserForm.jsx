import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "./api";
import "./Pages_CSS/Contact.css";

export default function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}`).then((res) => setFormData(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/users/${id}`, formData);
      } else {
        await api.post("/users", formData);
      }
      navigate("/users");
    } catch (err) {
      alert("Operation failed");
    }
  };

  return (
    <div className="contact-form" style={{ marginTop: "50px", color: "black" }}>
      <h2>{id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            type="text"
            value={formData.firstname}
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
            required
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            required
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required={!id}
          />
        </label>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
