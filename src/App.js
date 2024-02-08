import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/Mainpage/MainPage';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
