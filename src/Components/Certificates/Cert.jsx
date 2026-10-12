import Route from "../../assets/Route.jpg";
import JSB from "../../assets/Upskilling.jpeg";
import Node from "../../assets/node.jpeg";
import dotnet from "../../assets/dotnet.jpg";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

function Certificates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.15 });
  const [animated, setAnimated] = useState(false);
  if (isInView && !animated) setAnimated(true);

  const certs = [
    { img: JSB, label: "JSB — Frontend Development", org: "Upskilling EG" },
    { img: Route, label: "Diploma — Frontend Development", org: "Route Academy" },
    { img: Node, label: "Diploma — Node.js Development", org: "Upskilling EG" },
    { img: dotnet, label: "Diploma — Backend Development", org: "Canadian International College" },

  ];

  return (
    <motion.section
      id="cert"
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title header">Certificates</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {certs.map((c) => (
          <div key={c.label} className="flex flex-col gap-3">
            <div
              className="overflow-hidden rounded-xl"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                maxWidth: 420,
              }}
            >
              <img
                src={c.img}
                alt={c.label}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold" style={{ color: "var(--text-hi)" }}>{c.label}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{c.org}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certificates;
