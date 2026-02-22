import { Link } from "react-router-dom";
import "./Pages_CSS/Home.css";

export default function AdminDashboard() {
  return (
    <div className="homePageDiv" style={{ paddingTop: "40px" }}>
      <header
        style={{
          marginBottom: "40px",
          borderBottom: "1px solid #eaeaea",
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          Admin Dashboard
        </h1>
        <p style={{ color: "#666" }}>
          Manage your portfolio content and user messages.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Card 1: User Management */}
        <div className="admin-card" style={cardStyle}>
          <h3>User Management</h3>
          <p
            style={{
              margin: "10px 0 20px 0",
              color: "#555",
              fontSize: "0.9rem",
            }}
          >
            View registered users, add new administrators, or update
            credentials.
          </p>
          <Link
            to="/users"
            className="btn-secondary"
            style={{ display: "inline-block", textAlign: "center" }}
          >
            Manage Users &rarr;
          </Link>
        </div>

        {/* Card 2: Messages */}
        <div className="admin-card" style={cardStyle}>
          <h3>Inbox</h3>
          <p
            style={{
              margin: "10px 0 20px 0",
              color: "#555",
              fontSize: "0.9rem",
            }}
          >
            Read inquiries sent via the Contact Me form.
          </p>
          <Link
            to="/admin/messages"
            className="btn-secondary"
            style={{ display: "inline-block", textAlign: "center" }}
          >
            View Messages &rarr;
          </Link>
        </div>

        {/* Card 3: Quick Links (Optional) */}
        <div className="admin-card" style={cardStyle}>
          <h3>Content Quick Links</h3>
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <Link
              to="/project/add"
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              + New Project
            </Link>
            <Link
              to="/service/add"
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              + New Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple internal style object for the cards
const cardStyle = {
  border: "1px solid #eaeaea",
  borderRadius: "12px",
  padding: "24px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
