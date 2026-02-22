import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "./Pages_CSS/Contact.css";
import toast from "react-hot-toast";

export default function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams(); //if id exists then user is in edit mode
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completion: "",
    tags: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
  });

  // load data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      api
        .get(`/projects/${id}`)
        .then((res) => {
          const data = res.data;
          // Date formattter
          const dateStr = data.completion
            ? new Date(data.completion).toISOString().split("T")[0]
            : "";

          // Convert array of tags back to string for the input field
          // Example: ['React', 'Python'] becomes "React, Python"
          const tagsStr = data.tags ? data.tags.join(", ") : "";

          setFormData({ ...data, completion: dateStr, tags: tagsStr });
        })
        .catch((err) => console.error("Error loading projects:", err));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      // Logic: Split the string by commas, trim whitespace, and filter empty strings
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    };

    try {
      if (isEditMode) {
        //update
        await api.put(`/projects/${id}`, payload);
        // Toast notification would go here to replace alert (implementing later)
        toast.success("Project Updated Sucessfully!");
      } else {
        //create project
        await api.post("/projects", payload);
        toast.success("New Project Created!");
      }
      navigate("/projects");
    } catch (error) {
      console.error(error);
      toast.error("Operation failed");
    }
  };

  return (
    <div className="contact-form" style={{ marginTop: "50px", color: "black", maxWidth: "800px" }}>
      <h2>{isEditMode ? "Edit Project" : "Add New Project"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-inpt"
          />
        </label>
        <label>
          Tech Stack (comma separated):
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., React Native, Python, Expo, etc."
            className="form-inpt"
          />
        </label>

        {/* Links Section */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label style={{ flex: 1 }}>
            GitHub URL: 
            <input 
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="form-inpt"
            />
          </label>
          <label style={{ flex: 1 }}>
            Live Demo / App Store URl: 
            <input 
              type="text"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="form-inpt"
            />
          </label>
        </div>

        {/* Image URL */}
        <label>
          ScreenShot / Image URL:
          <input 
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="form-inpt"
          />
        </label>

        {/* Date Field */}
        <label>
          Completion Date:
          <input
            type="date"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
            className="form-inpt"
          />
        </label>

        {/* Description Field */}
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-textarea"
            rows="5"
            placeholder="Decribe the problem you solved and how you built it..."
          />
        </label>

        <button type="submit" className="form-submit-btn">{isEditMode ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
