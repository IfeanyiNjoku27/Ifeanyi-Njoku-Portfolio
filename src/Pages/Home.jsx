import { Navigate, useNavigate } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import "./Pages_CSS/Home.css";
import proPic from "../assets/aboutMePro.jpg"

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
            I build seamless cross-platform mobile <br />
            and scalable full-stack web systems.
          </h1>
          <p className="hero-subtitle">
            I am currently a Software Engineering Student at Centennial College,
            passionate about full-stack development, DevOps, and creating
            "Vertical Slice" engineering solutions
          </p>

          <div className="cta-group">
            <button
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              View All my Work! 🚀
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/contact")}
            >
              Contact Me! 📲
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured-section">
        <span className="featured-label">Currently Building</span>
        <div className="featured-content">
          <h2>Portfolio Pulse</h2>
          <div className="tech-badges">
            <span className="badge">React Native and React</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Node.js</span>
          </div>
          <div className="featured-desc">
            A real-time financial tracking interface built to with{" "}
            <strong>react</strong>. This project focuses on high-performance
            mobile UI, featuring complex data visualization and simulated
            real-time asset updates to demonstrate production-ready frontend
            architecture. <br /> <br />
            Features include:
            <ul>
              <li>
                Dynamic Dashboard: Real time calculation of total "Date Fund"
                savings.
              </li>
              <li>
                Goal Tracking: Visual progress bar that clamps values to 100% to
                prevent UI overflows
              </li>
              <li>
                Empty State: UX friendly "Zero Data" handling to guide new users.
              </li>
              <li>Dark Mode Native: Styled for modern mobile aesthetics</li>
            </ul>
          </div>
          <button
            className="btn-secondary"
            onClick={() => navigate("/projects")}
          >
            See Project Details &rarr;
          </button>
        </div>
      </section>

      {/* Mission / Value Statement */}
      <section className="mission-statement">
        <h3>My Philosophy</h3>
        <p style={{ lineHeight: "1.6", color: "#444" }}>
          My mission is to create useful, user-friendly applications that solve
          real-world problems. I believe in writing clean, maintainable code
          (with lots of comments) and constantly pushing the boundaries of what
          I can build, whether that's learning a new framework like{" "}
          <strong>Expo</strong> or optimizing backend logic in{" "}
          <strong>Python</strong> or <strong>Node.js</strong>.
        </p>
      </section>
    </div>
  );
}
