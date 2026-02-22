//imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Pages_CSS/Services.css";
import serviceData from "../components/services.json"
import toast from "react-hot-toast";

export default function Services() {
  const navigate = useNavigate();

 const services = serviceData;

  // Helper function to assign icons based on keywords in the title
  const getIconForService = (title) => {
    const t = title.toLowerCase();
    if (t.includes("mobile") || t.includes("app")) return "📱";
    if (t.includes("backend") || t.includes("api")) return "⚙️";
    if (t.includes("devops") || t.includes("cloud") || t.includes("slice"))
      return "🚀";
    if (t.includes("design") || t.includes("ui")) return "🎨";
    return "💻"; // Default icon
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Engineering Capabilities</h1>
        <p>
          Delivering end-to-end technical solutions with a focus on performance,
          scalability, and user experience.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <div className="service-icon">
              {getIconForService(service.title)}
            </div>

            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
