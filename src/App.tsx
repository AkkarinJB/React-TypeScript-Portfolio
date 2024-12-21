import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;