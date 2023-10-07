import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
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
				<Route path="/contact" element={<Contact />} />
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
