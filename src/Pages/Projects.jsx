// src/Pages/Projects.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import "./Pages_CSS/Projects.css";
import ProjectData from "../components/projects.json"

export default function Projects() {
  const navigate = useNavigate();

 const projects = ProjectData;

  return (
    <div className="project-container">
      <h1>My Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            {/* 1. Project Thumbnail */}
            <img
              src={
                project.imageUrl || "https://placehold.co/600x400?text=No+Image"
              }
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              {/* 2. Title & Date */}
              <h2 className="project-title">{project.title}</h2>
              <small className="project-date">
                Completed:{" "}
                {project.completion
                  ? new Date(project.completion).toLocaleDateString()
                  : "Ongoing"}
              </small>

              {/* 3. Tech Stack Badges */}
              {project.tags && project.tags.length > 0 && (
                <div className="tech-stack">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* 4. Description */}
              <p className="project-description">{project.description}</p>

              {/* 5. Footer: Links & Admin Controls */}
              <div className="card-footer">
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      View Code &rarr;
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
