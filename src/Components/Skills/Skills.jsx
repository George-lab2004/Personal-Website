import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiGithub,
  SiFigma,
  SiSwagger,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import Material from "../../assets/material-UI.png";
const skills = [
  {
    icon: <FaHtml5 className="text-4xl" style={{ color: "#E34F26" }} />,
    label: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-4xl" style={{ color: "#2965F1" }} />,
    label: "CSS",
  },
  {
    icon: <FaNodeJs className="text-4xl" style={{ color: "#F7DF1E" }} />,
    label: "JavaScript",
  },
  {
    icon: <FaReact className="text-4xl" style={{ color: "#61DBFB" }} />,
    label: "React JS",
  },
  {
    icon: <SiTypescript className="text-4xl" style={{ color: "#3178C6" }} />,
    label: "TypeScript",
  },
  {
    icon: <BsBootstrap className="text-4xl" style={{ color: "#563D7C" }} />,
    label: "Bootstrap",
  },
  {
    icon: <SiPostman className="text-4xl" style={{ color: "#FF6A00" }} />,
    label: "Postman",
  },
  {
    icon: <SiGithub className="text-4xl" style={{ color: "#24292F" }} />,
    label: "GitHub",
  },
  {
    icon: <SiFigma className="text-4xl" style={{ color: "#F24E1E" }} />,
    label: "Figma",
  },
  {
    icon: <SiSwagger className="text-4xl" style={{ color: "#85B300" }} />,
    label: "Swagger",
  },
  {
    icon: <SiTailwindcss className="text-4xl" style={{ color: "#38BDF8" }} />,
    label: "Tailwind CSS",
  },
  {
    icon: (
      <img
        src={Material}
        alt="Material UI"
        className="w-10 h-10 bg-transparent object-contain"
      />
    ),
    label: "Material UI",
  },
];

export default function Skills() {
  const sectionRef = useRef(null); // Reference for the section
  const isInView = useInView(sectionRef, { threshold: 0.2 }); // Detect if the section is in view
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has occurred

  // Effect to set hasAnimated to true when the section comes into view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="w-full py-16 bg-[#F3F4F6] rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly down
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 header border-b-4 pb-1.5 border-black tracking-wider">
        Skills
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 gap-x-16 px-4 mx-auto mt-8 md:mt-16">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex hover:scale-110 transition-all duration-100 hover:border-black hover:border-4 flex-col justify-center text-center border border-transparent rounded-xl items-center bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 max-w-[220px] w-full h-[250px] px-4 shadow-lg mx-3"
          >
            <div>{skill.icon}</div>
            <p className="text-white text-base mt-6 font-bold">{skill.label}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
