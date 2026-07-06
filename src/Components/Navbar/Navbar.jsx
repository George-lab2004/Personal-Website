import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#cert",     label: "Certs"    },
];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11,15,25,0.92)"
          : "rgba(11,15,25,0.5)",
        borderBottom: scrolled ? "1px solid #1E2D45" : "1px solid transparent",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="font-bold text-lg" style={{ color: "var(--text-hi)", letterSpacing: "-0.02em" }}>
          George<span style={{ color: "var(--cyan)" }}>.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={e => e.target.style.color = "var(--text-hi)"}
              onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="cyan-btn text-sm ml-3" style={{ padding: "8px 20px" }}>
            Contact
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="sm:hidden p-2 rounded-md"
          style={{ color: "var(--text-dim)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div animate={isOpen ? "open" : "closed"} className="flex flex-col gap-1.5 w-5">
            <motion.span
              className="block h-0.5 rounded"
              style={{ background: "var(--text)" }}
              variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-0.5 rounded"
              style={{ background: "var(--text)" }}
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 rounded"
              style={{ background: "var(--text)" }}
              variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
            className="sm:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="cyan-btn text-sm text-center mt-2" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
