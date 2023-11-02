import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/Mainpage/MainPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
