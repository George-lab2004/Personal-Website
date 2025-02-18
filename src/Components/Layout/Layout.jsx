import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Cert from "../Certificates/Cert";
export default function Layout() {
  return (
    <div>
      <div className=" sm:h-screen ">
        <Navbar />
        <div className=" body-bg pt-28 md:pt-0">
          <Home />
        </div>
        <div className="bg-white">
          <About />
        </div>
        <div className="body-bg">
          <Skills />
        </div>
        <div className="bg-white">
          <Projects />
        </div>
        <div className="body-bg">
          <Cert />
        </div>
        <div className="bg-white">
          <Contact />
        </div>
      </div>
    </div>
  );
}
