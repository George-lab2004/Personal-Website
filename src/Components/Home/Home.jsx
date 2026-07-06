import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import George from "../../assets/George.png";

export default function Home() {
  const cvFile = "/George-Milad.pdf";

  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "MERN Engineer", "AI Integrator"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 60,
  });

  const stats = [
    { val: "3+",   label: "Years Learning"   },
    { val: "15+",  label: "Projects Shipped" },
    { val: "3.89", label: "GPA"              },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(var(--cyan-glow), transparent 70%)",
          top: "10%", right: "-10%",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — text */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "var(--cyan)" }} />
              <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: "var(--cyan)" }}
              >
                Available for hire
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-extrabold leading-none mb-4"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                color: "var(--text-hi)",
                letterSpacing: "-0.03em",
              }}
            >
              George Milad
            </h1>

            {/* Typewriter */}
            <p
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              <span style={{ color: "var(--cyan)" }}>
                {text}
                <Cursor cursorStyle="|" cursorColor="var(--cyan)" />
              </span>
            </p>

            {/* Bio */}
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-dim)", maxWidth: "480px" }}>
              Building production-grade web systems — MERN stack, agentic AI, and
              cloud data pipelines. I ship software that works, scales, and
              doesn't need an explanation to impress.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href={cvFile} download="George_Milad_CV.pdf" className="cyan-btn">
                Download CV
              </a>
              <a href="#projects" className="ghost-btn">
                See Projects
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/george-milad-6ba747250/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-dim)"; }}
              >
                <GrLinkedinOption size={16} />
              </a>
              <a
                href="https://github.com/George-lab2004"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-dim)"; }}
              >
                <AiFillGithub size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right — portrait + stats card */}
          <motion.div
            className="flex flex-col gap-4 w-full max-w-xs"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="card-surface overflow-hidden rounded-2xl">
              <div className="relative" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src={George}
                  alt="George Milad portrait"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-4"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(11,15,25,0.82) 100%)",
                  }}
                >
                  <div className="text-sm font-semibold" style={{ color: "var(--text-hi)" }}>
                    George Milad
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-dim)" }}>
                    Full-Stack Developer · Cairo, EG
                  </div>
                </div>
              </div>
            </div>

            {/* Status card */}
            <div className="card-surface p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
                />
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
                  Status
                </span>
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-hi)" }}>
                Open to opportunities
              </p>
              <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                Full-Stack · Remote · Cairo, EG
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card-surface p-4 rounded-xl text-center">
                  <div
                    className="text-2xl font-extrabold leading-none mb-1"
                    style={{ color: "var(--cyan)" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-xs leading-tight" style={{ color: "var(--text-dim)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div className="card-surface p-4 rounded-xl">
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-dim)" }}>
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "TypeScript", "Python", "Azure"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
