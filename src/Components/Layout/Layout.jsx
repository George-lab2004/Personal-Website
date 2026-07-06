import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Cert from "../Certificates/Cert";

export default function Layout() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <Home />
      <About />
      <div style={{ background: "var(--surface)" }}>
        <Skills />
      </div>
      <Projects />
      <div style={{ background: "var(--surface)" }}>
        <Cert />
      </div>
      <Contact />
      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px",
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: "var(--text-dim)",
        }}
      >
        © 2025 George Milad — Full-Stack Developer · Cairo, EG
      </footer>
    </div>
  );
}
