import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/Mainpage/MainPage';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Education />} />
        <Route path="/" element={<Blog />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
