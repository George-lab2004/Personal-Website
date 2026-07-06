import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView, motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <GrLinkedinOption size={18} />,
    label: "LinkedIn",
    sub: "linkedin.com/in/george-milad-6ba747250",
    href: "https://www.linkedin.com/in/george-milad-6ba747250/",
  },
  {
    icon: <AiFillGithub size={18} />,
    label: "GitHub",
    sub: "github.com/George-lab2004",
    href: "https://github.com/George-lab2004",
  },
  {
    icon: <FaEnvelope size={16} />,
    label: "Email",
    sub: "George.milad2@gmail.com",
    href: "mailto:George.milad2@gmail.com",
  },
];

export default function Contact() {
  const formRef    = useRef();
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const isInView  = useInView(sectionRef, { threshold: 0.15 });
  const [animated, setAnimated] = useState(false);
  if (isInView && !animated) setAnimated(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_bq8e7ia",
        "template_5td4aop",
        formRef.current,
        "q5he97byk5mWoXDL2"
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
          toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000 });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send. Try again later.");
        }
      );
  };

  const inputStyle = {
    width: "100%",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "10px 14px",
    color: "var(--text-hi)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginBottom: "6px",
    color: "var(--text-dim)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ToastContainer theme="dark" />

      <h2 className="section-title header">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — info */}
        <div className="flex flex-col gap-6">
          <p className="leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Open to full-stack, frontend, and backend roles — remote or Cairo-based.
            If you have a project, an opportunity, or just want to talk tech, reach out.
          </p>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--border-hi)";
                  e.currentTarget.style.background = "var(--surface-2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                  style={{ background: "var(--surface-2)", color: "var(--cyan)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-hi)" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--text-dim)" }}>{s.sub}</div>
                </div>
                <div className="ml-auto text-sm" style={{ color: "var(--text-dim)" }}>→</div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="What's on your mind?"
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="cyan-btn w-full text-center font-bold"
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </motion.section>
  );
}
