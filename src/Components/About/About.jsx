import {
  FaUser, FaMapMarkerAlt, FaEnvelope,
  FaUniversity, FaGraduationCap, FaBriefcase,
} from "react-icons/fa";
import about from "../../assets/Aboutt.jpg";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const infoRows = [
  { icon: <FaUser style={{ color: "#f59e0b" }} />,    label: "Name",        value: "George Milad" },
  { icon: <FaMapMarkerAlt style={{ color: "#ef4444" }} />, label: "Location",    value: "Cairo, Egypt" },
  { icon: <FaEnvelope style={{ color: "#3b82f6" }} />, label: "Email",       value: "George.milad2@gmail.com" },
  { icon: <FaBriefcase style={{ color: "#8b5cf6" }} />, label: "Internship",  value: "Software Developer — HITS Solution" },
  { icon: <FaGraduationCap style={{ color: "#22d3ee" }} />, label: "Degree",  value: "Business Information Systems" },
  { icon: <FaUniversity style={{ color: "#6366f1" }} />, label: "University", value: "CIC × Cape Breton University (Dual Degree)" },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView    = useInView(sectionRef, { threshold: 0.15 });
  const [animated, setAnimated] = useState(false);
  if (isInView && !animated) setAnimated(true);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title header">About Me</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Photo */}
        <div className="relative w-full lg:w-72 flex-shrink-0">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ border: "1px solid var(--border)" }}
          >
            <img
              src={about}
              alt="George Milad"
              className="w-full h-80 lg:h-96 object-cover object-top"
              style={{ filter: "grayscale(10%)" }}
            />
            {/* green-ish overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(11,15,25,0.7) 0%, transparent 50%)",
              }}
            />
          </div>
          {/* decorative corner */}
          <div
            className="absolute -bottom-3 -right-3 w-full h-full rounded-xl pointer-events-none"
            style={{ border: "1px solid var(--border-hi)", zIndex: -1 }}
          />
          {/* GPA badge */}
          <div
            className="absolute bottom-4 left-4 px-3 py-2 rounded-lg text-sm font-bold"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--cyan)" }}
          >
            GPA 3.89 / 4.0
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Bio */}
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text)" }}>
            I'm a <strong style={{ color: "var(--text-hi)" }}>Full-Stack Developer</strong> based in
            Cairo, Egypt, specializing in MERN stack, TypeScript, and AI integration.
            I build production-grade software — ecommerce platforms with agentic AI, real estate
            data pipelines on Azure, and B2B SaaS dashboards — not tutorial clones.
            Currently completing a dual degree from Canadian International College and
            Cape Breton University with a strong 3.86 GPA.
          </p>

          {/* Info grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-xl mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 flex-shrink-0">{row.icon}</span>
                <span>
                  <span className="font-semibold" style={{ color: "var(--text-hi)" }}>{row.label}: </span>
                  <span style={{ color: "var(--text-dim)" }}>{row.value}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div
            className="p-5 rounded-xl mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-dim)" }}>
              Certificates
            </p>
            <ul className="space-y-2">
              {[
                "Diploma in Frontend Development — Route Academy",
                "JSB in Frontend Development — Upskilling EG",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm" style={{ color: "var(--text)" }}>
                  <span style={{ color: "var(--cyan)" }}>—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <a href="#contact" className="cyan-btn">Hire Me</a>
            <a href="#projects" className="ghost-btn">See Projects</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
