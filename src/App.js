import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const isAuth = localStorage.getItem("auth");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={darkMode ? "app" : "app light"}>

        <button
          className="toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              isAuth ? <Dashboard /> : <Navigate to="/login" />
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;