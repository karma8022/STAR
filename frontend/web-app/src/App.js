import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import SignIn from "./pages/Signin.jsx";
// import SignUp from "./pages/Signup.jsx";
import Profile from "./pages/Profile.js";
import Docs from "./pages/Docs";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home.js";
import "./style.css";
function App() {
	return (
		<div className="bg-transparent">
			<Navbar />
			<Routes>
				{/* <Route path="/signup" element={<SignUp />} /> */}
				{/* <Route path="/signin" element={<SignIn />} /> */}
				<Route path="/profile" element={<Profile />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
