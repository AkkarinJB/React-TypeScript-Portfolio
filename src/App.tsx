import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./index.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/Home'));
const Project = React.lazy(() => import('./pages/Project'));
const Contact = React.lazy(() => import('./pages/Contact'));

const LoadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); 
          return 100;
        }
        return prev + 15;
      });
    }, 100); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="centered-loading">
      <div className="cat-static">
        <img className="w-24 h-24" src="/assets/cat.gif" alt="cat-run" />
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p> 
    </div>
  );
};

const Routing: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    const timeout = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      {loading && <LoadingProgress />}
      <React.Suspense fallback={<LoadingProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;