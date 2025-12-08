import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/services";
import Certifications from "./components/Certifications";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Services />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
