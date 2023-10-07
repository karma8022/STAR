import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin.js";
import SignUp from "./pages/Signup.js";
import Profile from "./pages/Profile.js";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home.js";
import "./style.css";
function App() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<signup />} />
        <Route path="/signin" element={<signin />} />
        <Route path="/profile" element={<profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
