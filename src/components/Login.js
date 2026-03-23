import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (user) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      showToast("Login successful ✅");
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      showToast("Invalid credentials ❌");
    }
  };

  return (
    <div className="card">
      {toast && <div className="toast">{toast}</div>}

      <h2>Login</h2>

      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>

      <button disabled={!form.email || !form.password}>
        Login
      </button>

      <p className="link" onClick={()=>navigate("/")}>
        Create new account
      </p>
    </div>
  );
}

export default Login;