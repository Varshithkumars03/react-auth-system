import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="card">

      <div className="avatar">
        {user?.username.charAt(0).toUpperCase()}
      </div>

      <h2>Welcome, {user?.username}</h2>
      <p>{user?.email}</p>

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default Dashboard;