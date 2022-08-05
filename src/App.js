import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WhatsappComponent from "./components/WhatsappComponent";
import Work from "./components/Work";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <WhatsappComponent />
    </div>
  );
}

export default App;
