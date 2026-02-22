import { useState, useEffect } from "react";
import api from "./api";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this message?")) {
      await api.delete(`/contacts/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contact Messages (Admin)</h1>
      {contacts.map((contact) => (
        <div
          key={contact._id}
          style={{
            background: "#333",
            padding: "20px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>
            {contact.firstname} {contact.lastname}
          </h3>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Message:</strong> {contact.message}
          </p>
          <button
            onClick={() => handleDelete(contact._id)}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
