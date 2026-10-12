import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript, SiPostman, SiGithub, SiFigma,
  SiTailwindcss, SiMongodb, SiExpress,
  SiRedux, SiNextdotjs, SiFirebase, SiVercel,
  SiDotnet,
} from "react-icons/si";
import {
  TbBrandFramerMotion, TbBrandCSharp, TbDatabase,
  TbDatabaseImport, TbShieldLock,
} from "react-icons/tb";
import Material from "../../assets/material-UI.png";

const categories = [
  {
    label: "Frontend",
    color: "#22d3ee",
    skills: [
      { icon: <FaHtml5 style={{ color: "#E34F26" }} />, label: "HTML5" },
      { icon: <FaCss3Alt style={{ color: "#2965F1" }} />, label: "CSS3" },
      { icon: <FaReact style={{ color: "#61DBFB" }} />, label: "React" },
      { icon: <SiNextdotjs style={{ color: "#fff" }} />, label: "Next.js" },
      { icon: <SiTypescript style={{ color: "#1F6FDB" }} />, label: "TypeScript" },
      { icon: <SiRedux style={{ color: "#764ABC" }} />, label: "Redux" },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, label: "Tailwind" },
      { icon: <TbBrandFramerMotion style={{ color: "#FF00FF" }} />, label: "Framer" },
      { icon: <img src={Material} alt="MUI" className="w-8 h-8 object-contain" />, label: "MUI" },
    ],
  },
  {
    label: "Backend & Data",
    color: "#4ade80",
    skills: [
      { icon: <FaNodeJs style={{ color: "#68A063" }} />, label: "Node.js" },
      { icon: <SiExpress style={{ color: "#ccc" }} />, label: "Express" },
      { icon: <SiMongodb style={{ color: "#4DB33D" }} />, label: "MongoDB" },
      { icon: <TbBrandCSharp style={{ color: "#9B4F96" }} />, label: "C#" },
      { icon: <SiDotnet style={{ color: "#512BD4" }} />, label: "ASP.NET MVC" },
      { icon: <TbDatabaseImport style={{ color: "#7C5CFF" }} />, label: "EF Core" },
      { icon: <TbDatabase style={{ color: "#CC2927" }} />, label: "SQL Server" },
      { icon: <TbShieldLock style={{ color: "#38BDF8" }} />, label: "Identity" },
    ],
  },
  {
    label: "Tools",
    color: "#a78bfa",
    skills: [
      { icon: <FaGitAlt style={{ color: "#F05032" }} />, label: "Git" },
      { icon: <SiGithub style={{ color: "#ccc" }} />, label: "GitHub" },
      { icon: <SiPostman style={{ color: "#FF6A00" }} />, label: "Postman" },
      { icon: <SiFigma style={{ color: "#F24E1E" }} />, label: "Figma" },
      { icon: <SiFirebase style={{ color: "#FFA611" }} />, label: "Firebase" },
      { icon: <SiVercel style={{ color: "#fff" }} />, label: "Vercel" },
    ],
  },
];

function SkillCard({ icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-200 cursor-default"
      style={{
        background: hovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hovered ? "var(--border-hi)" : "var(--border)"}`,
        transform: hovered ? "translateY(-3px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-xs font-medium text-center" style={{ color: "var(--text-dim)" }}>
        {label}
      </span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [animated, setAnimated] = useState(false);
  if (isInView && !animated) setAnimated(true);

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title header">Skills</h2>

      <div className="flex flex-col gap-12">
        {categories.map((cat) => (
          <div key={cat.label}>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              <span className="text-sm font-mono uppercase tracking-widest" style={{ color: cat.color }}>
                {cat.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            {/* Skill cards */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
              {cat.skills.map((s) => (
                <SkillCard key={s.label} icon={s.icon} label={s.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}