import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experiencie";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WhatsappComponent from "./components/WhatsappComponent";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <WhatsappComponent />
    </>
  );
}

export default App;
