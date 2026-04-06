// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Instructors from "./components/instructorsListing";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/instructors/:instructorId" element={<Instructors />} />
			</Routes>
		</>
	);
}

export default App;
