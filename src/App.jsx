import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesComponent from "./components/particles";
import "./App.css";


function App() {
  return (
    <div>
      {/* Background particles */}
      <ParticlesComponent id="tsparticles" />
      
      {/* Dark overlay (Optional, for better visibility) */}
      <div className="overlay"></div>

      {/* Main content */}
      <div className="main-content">
        <Navbar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
