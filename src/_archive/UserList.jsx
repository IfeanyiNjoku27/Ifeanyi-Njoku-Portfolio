import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>User Management</h1>
      <button
        onClick={() => navigate("/user/add")}
        style={{ marginBottom: "20px", background: "#007bff" }}
      >
        + Add User
      </button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #555" }}>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} style={{ borderBottom: "1px solid #444" }}>
              <td>
                {user.firstname} {user.lastname}
              </td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/user/edit/${user._id}`)}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  style={{ background: "red", marginLeft: "5px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
