import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hiro from "./components/Hiro";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import Edu from "./components/Edu";

function App() {
  useEffect(() => {
    document.title = "Amit Jadhav";
    AOS.init();
  }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500 bg">
      <Navbar />
      <Hiro />
      <Edu />
      <Skills />
      <Projects />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
