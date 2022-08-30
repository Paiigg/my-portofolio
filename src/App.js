import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import './style/style.css';
import './App.css'



function App() {
  return (
    <div >
      <NavigationBar />
      <Home />
      <Skills/>
      <About/>
      <Project />
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
