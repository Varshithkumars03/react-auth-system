import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.username) return showToast("Username required ❌");
    if (!/\S+@\S+\.\S+/.test(form.email))
      return showToast("Invalid email ❌");
    if (form.password.length < 6)
      return showToast("Password too short ❌");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === form.email))
      return showToast("User already exists ❌");

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Signup successful ✅");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="card">
      {toast && <div className="toast">{toast}</div>}

      <h2>Create Account</h2>

      <input placeholder="Username" onChange={(e)=>setForm({...form, username:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>

      <button disabled={!form.username || !form.email || !form.password}>
        Signup
      </button>

      <p className="link" onClick={()=>navigate("/login")}>
        Already have account?
      </p>
    </div>
  );
}

export default Signup;