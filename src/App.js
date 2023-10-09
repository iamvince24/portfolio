import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import NavigationBar from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import About from './routes/about/about.component.jsx';
import Blog from './routes/blog/blog.component.jsx';
import Project from './routes/project/project.component.jsx';
import Article from "./routes/article/article.component";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
