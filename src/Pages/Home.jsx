import { Navigate, useNavigate } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import "./Pages_CSS/Home.css";
import proPic from "../assets/aboutMePro.jpg";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className="homePageDiv">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={proPic} alt="Ifeanyi Njoku" className="profile-pic" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m Ifeanyi Wilson Njoku. <br />
            I build scalable systems <br />
            and AI-integrated mobile architectures.
          </h1>
          <p className="hero-subtitle">
            I’m a Software Engineering student dedicated to building data-driven
            applications. I focus on architecting robust systems, from
            event-driven CI/CD pipelines to predictive machine learning models,
            ensuring they are as efficient under the hood as they are intuitive
            for the user.
          </p>

          <div className="cta-group">
            <button
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              View System Designs & Code! 🚀
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/contact")}
            >
              Let's Connect! 📲
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured-section">
        <span className="featured-label">Currently Building</span>
        <div className="featured-content">
          <h2>Chopped: AI Recipe Intelligence</h2>
          <div className="tech-badges">
            <span className="badge">React Native</span>
            <span className="badge">GraphQL</span>
            <span className="badge">Apollo Client</span>
            <span className="badge">AI Integration</span>
            <span className="badge">LangGraph</span>
          </div>
          <div className="featured-desc">
            A mobile application that leverages AI to scrape, parse, and manage
            recipe data directly from YouTube video transcripts. This project
            focuses on complex system design rather than just UI, managing
            sophisticated frontend-mobile environments.
            <br /> <br />
            Features include: Architectural focus includes:
            <ul>
              <li>
                <strong>Data Integration:</strong> Utilizing Apollo Client to
                manage complex state and cache queried data.
              </li>
              <li>
                <strong>API Layering:</strong> Writing optimized backend GraphQL
                queries for rapid single-recipe fetching.
              </li>
              <li>
                <strong>AI Parsing:</strong> Translating raw, unstructured video
                transcripts into structured, actionable JSON data objects.
              </li>
            </ul>
          </div>
          <button
            className="btn-secondary"
            onClick={() => navigate("/projects")}
          >
            Explore Technical Projects &rarr;
          </button>
        </div>
      </section>

      {/* Mission / Value Statement */}
      <section className="mission-statement">
        <h3>My Engineering Philosophy</h3>
        <p style={{ lineHeight: "1.6", color: "#444" }}>
          I am actively transitioning from simply writing code to deeply
          understanding software architecture and data flows. I believe in
          writing clean, highly-documented code that cross-functional teams can
          easily maintain. Whether I am configuring Docker environments,
          applying SMOTE to balance machine learning datasets, or mapping
          RESTful APIs, my goal is to deliver "Vertical Slice" solutions that
          directly address business requirements.
        </p>
      </section>
    </div>
  );
}
