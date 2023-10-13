import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Navigation from "./routes/navigation/NavigationPage.jsx";
import Home from "./routes/home/HomePage.jsx";
import Project from "./routes/project/ProjectPage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
