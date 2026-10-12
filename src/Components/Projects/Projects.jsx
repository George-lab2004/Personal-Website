import { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogBackdrop, DialogPanel, DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Carousel } from "flowbite-react";

// ── Image imports (existing) ──────────────────────────────────────
import FoodApp from "../../assets/FoodApp.png";
import Crud from "../../assets/Crud-system.png";
import FreshCart from "../../assets/FreshCart.png";
import Hotel from "../../assets/Hotel.png";
import Movie from "../../assets/Movie.png";
import Games from "../../assets/OOP-games.png";
import Portfolio from "../../assets/Portfolio.png";
import PortfolioTwo from "../../assets/PortfolioTwo.png";
import Weather from "../../assets/Weather.png";
import Yummy from "../../assets/Yummy.png";
import Quiz from "../../assets/Quizz.png";
import Dashboard from "../../assets/Dashboard.png";
import CvBuilder from "../../assets/CvBuilder.png";
import CvBuilderTwo from "../../assets/CvBuilder/Process1.png";
import CvBuilderThree from "../../assets/CvBuilder/process2.png";
import CvBuilderFour from "../../assets/CvBuilder/Output.png";
import TechMart from "../../assets/Techmart.png";
import SmartMove from "../../assets/smartmove.png";

// ── Accent colors per featured project ───────────────────────────
const ACCENTS = {
  techmart: "#22d3ee",
  smartmove: "#4ade80",
  projectmonitor: "#a78bfa",
};

// ── Project data ──────────────────────────────────────────────────
const allProjects = [
  // ── FEATURED (shown first, styled differently) ─────────────────
  {
    id: "techmart",
    featured: true,
    accent: ACCENTS.techmart,
    label: "MERN · AI · TypeScript",
    img: TechMart,
    name: "TechMart",
    images: [TechMart],
    github: "https://github.com/George-lab2004/TechMart",
    link: "https://tech-mart-e1dv.vercel.app/",
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB", "Gemini AI", "Stripe", "PayPal"],
    description:
      "Full-featured ecommerce platform with dual Gemini AI integration — a 22-function consumer shopping assistant (Eve) and a 7-function admin Business Analyst AI. Built solo in ~1 month with guest-to-auth cart sync, Stripe + PayPal, rate limiting, and Joi validation.",
    challenges: [
      "Dual agentic Gemini AI (consumer + admin portals)",
      "22-function consumer assistant, 7-function admin analyst",
      "4-model AI fallback chain",
      "Guest-to-authenticated cart sync",
      "Stripe + PayPal dual payment integration",
      "Rate limiting + Joi validation middleware",
    ],
  },
  {
    id: "smartmove",
    featured: true,
    accent: ACCENTS.smartmove,
    label: "Next.js · Azure · Python · Power BI",
    img: SmartMove,
    name: "SmartMove",
    images: [SmartMove],
    github: "https://github.com/AhmedSherif3/SmartMove",
    link: "https://www.smartmoveanalytics.me/",
    tech: ["Next.js", "TypeScript", "Tailwind", "Python", "Azure", "dbt", "Airflow", "SSAS", "Power BI"],
    description:
      "Real estate analytics platform covering Egypt, Dubai, and England. Full Azure cloud warehouse with star schema, automated ETL via dbt + Airflow, SSAS/DAX analytical models, Power BI dashboards, and an agentic AI that autonomously generates charts and triggers pipelines.",
    challenges: [
      "Azure Data Warehouse with star schema design",
      "dbt + Airflow automated ETL pipeline",
      "SSAS/DAX multi-dimensional analytical models",
      "Agentic AI for autonomous chart generation & pipeline triggering",
      "3 role-based portals: Data Analyst, User, Admin",
      "Graduate-level project — Egypt, Dubai, England datasets",
    ],
  },
  {
    id: "projectmonitor",
    featured: true,
    accent: ACCENTS.projectmonitor,
    label: "MERN · Pusher",
    img: null, // → add your screenshot: import ProjectMonitor from "../../assets/projectmonitor.png"
    name: "ProjectMonitorAI",
    images: [],
    github: "https://github.com/George-lab2004/ProjectMonitorAI",
    link: "https://project-monitor-ai.vercel.app/",
    tech: ["TypeScript", "Node.js", "MongoDB", "Pusher", "Gemini AI", "Cron Jobs"],
    description:
      "B2B project management backend only for now, with dual Manager and Team Member portals. Proactive AI engine runs on a daily cron schedule analyzing project health and sending alerts. Real-time communication via Pusher across 3 private channel types. Performance Intelligence scoring subsystem.",
    challenges: [
      "Dual role-based portals: Manager + Team Member",
      "Proactive AI engine (daily cron, not reactive)",
      "Pusher real-time channels (3 private types)",
      "Performance Intelligence scoring subsystem",
      "Backend deployed on Vercel",
    ],
  },

  // ── Regular projects ───────────────────────────────────────────
  {
    id: "restauranthub",
    featured: false,
    accent: ACCENTS.restauranthub, // add this key to ACCENTS (e.g. the orange #d9480f from the app)
    label: "ASP.NET Core MVC · EF Core · SQL Server",
    img: "",           // import a screenshot, e.g. the menu page
    name: "RestaurantHub",
    images: "",      // add more: checkout, admin orders, order history
    github: "https://github.com/George-lab2004/RestaurantHub",
    link: [],                     // no live demo, so hide the button when empty
    tech: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "ASP.NET Identity", "Razor", "Bootstrap", "Dependency Injection", "Custom Middleware"],
    description:
      "Online restaurant ordering system with separate customer and admin portals, built solo with ASP.NET Core MVC and EF Core Code First. Customers browse the menu, fill a session cart, check out and track orders. Admins manage categories and menu items with secure image upload, and run orders through an enforced status workflow with a full audit history. Prices and tax are always calculated server-side.",
    challenges: [
      "Role-based auth (Admin / Customer) with ASP.NET Identity and per-user ownership checks",
      "Server-side pricing: the session cart stores only ids and quantities, never prices",
      "Order status state machine enforced on the server, with an audit-trail history table",
      "Price snapshots on order lines and Restrict deletes to protect order history",
      "Secure image upload (extension whitelist, size limit, GUID names)",
      "Custom middleware for request logging and global exception handling",
    ],
  }
  , {
    id: "quiz", featured: false,
    github: "https://github.com/mohamedreda850/quizapp",
    link: "https://quizapp-wine-one.vercel.app/",
    img: Quiz, name: "QuizApp", images: [Quiz],
    tech: ["React", "Tailwind CSS", "TypeScript", "JWT", "Flowbite", "React-Hook-Form"],
    description: "Quiz platform for educators and students with admin portal, analytics, and results tracking.",
    challenges: ["Secured Authentication", "Quiz Management", "Admin Portal", "Student Portal", "Results Tracking"],
  },
  {
    id: "food", featured: false,
    github: "https://github.com/George-lab2004/FoodApp",
    link: "https://food-app-ten-roan.vercel.app/",
    img: FoodApp, name: "FoodApp", images: [FoodApp],
    tech: ["React", "Bootstrap", "JWT", "React Router", "Axios"],
    description: "Recipe management platform with admin and user portals, category management, and favourites list.",
    challenges: ["Secured Authentication", "Admin Portal", "Recipe Managing", "Favourite List"],
  },
  {
    id: "freshcart", featured: false,
    github: "https://github.com/George-lab2004/E-commerce",
    link: "https://e-commerce-tfkl.vercel.app/",
    img: FreshCart, name: "FreshCart", images: [FreshCart],
    tech: ["React", "Tailwind CSS", "Axios", "Formik", "Context API"],
    description: "E-commerce platform with full shopping cart, checkout, and product catalog.",
    challenges: ["Authentication Module", "Full shopping cart", "API integration"],
  },
  {
    id: "cvbuilder", featured: false,
    github: "https://github.com/George-lab2004/CVBuilder",
    link: "https://cv-builder-iota-five.vercel.app/",
    img: CvBuilder, name: "CV Builder",
    images: [CvBuilder, CvBuilderTwo, CvBuilderThree, CvBuilderFour],
    tech: ["React", "TypeScript", "Tailwind CSS", "React to Print"],
    description: "Real-time resume builder with PDF export, dark mode, and live preview.",
    challenges: ["Dynamic form handling", "Real-time UI updates", "PDF export with custom layout"],
  },
  {
    id: "hotel", featured: false,
    github: "https://github.com/mohamedreda850/hms",
    link: "https://hmslast.netlify.app/auth/login",
    img: Hotel, name: "Hotel Booking", images: [Hotel],
    tech: ["React", "Tailwind", "Firebase"],
    description: "Hotel reservation platform with Firebase auth and modern UI.",
    challenges: ["Firebase authentication", "Responsive UI", "React Router DOM"],
  },
  {
    id: "movie", featured: false,
    github: "https://github.com/George-lab2004/MovieApp",
    link: "https://movie-app-amri.vercel.app/",
    img: Movie, name: "Movie App", images: [Movie],
    tech: ["React", "Tailwind", "Firebase", "TMDB API", "Framer Motion"],
    description: "Discover, save, and organize movies with real-time TMDB data, watchlist, and genre filter.",
    challenges: ["TMDB API integration", "Dynamic search", "Firebase auth", "Watchlist functionality"],
  },
  {
    id: "dashboard", featured: false,
    github: "https://github.com/George-lab2004/Dashboard",
    link: "https://dashboard-rho-peach.vercel.app/",
    img: Dashboard, name: "Dashboard", images: [Dashboard],
    tech: ["React", "Tailwind", "Framer Motion", "react-i18n"],
    description: "Admin dashboard with charts, animations, and multilingual support.",
    challenges: ["Responsive Design", "Chart Integrations", "Multilingual Support"],
  },
  {
    id: "yummy", featured: false,
    github: "https://github.com/George-lab2004/Yummy-App",
    link: "https://george-lab2004.github.io/Yummy-App/",
    img: Yummy, name: "Yummy", images: [Yummy],
    tech: ["JavaScript", "CSS", "External API"],
    description: "Recipe app with filtering by area, ingredients, and search.",
    challenges: ["External API", "Efficient filtering system"],
  },
  {
    id: "weather", featured: false,
    github: "https://github.com/George-lab2004/Weather-api",
    link: "https://george-lab2004.github.io/Weather-api",
    img: Weather, name: "Weather App", images: [Weather],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: "Real-time weather app using a weather API.",
    challenges: ["Weather API integration", "Responsive UI"],
  },
  {
    id: "games", featured: false,
    github: "https://github.com/George-lab2004/OOP-games",
    link: "https://george-lab2004.github.io/OOP-games",
    img: Games, name: "OOP Games", images: [Games],
    tech: ["JavaScript", "OOP", "Canvas"],
    description: "Small games built with Object-Oriented Programming.",
    challenges: ["OOP principles", "Performance optimization"],
  },
  {
    id: "crud", featured: false,
    github: "https://github.com/George-lab2004/Crud-System",
    link: "https://george-lab2004.github.io/Crud-System/",
    img: Crud, name: "CRUD System", images: [Crud],
    tech: ["JavaScript", "Bootstrap", "LocalStorage"],
    description: "CRUD system for managing user data with local storage persistence.",
    challenges: ["Local storage persistence", "Add / delete / update"],
  },
  {
    id: "portfolio", featured: false,
    github: "https://github.com/George-lab2004/Porfoilo",
    link: "https://george-lab2004.github.io/Porfoilo",
    img: Portfolio, name: "Portfolio v1", images: [Portfolio],
    tech: ["HTML", "CSS", "Bootstrap"],
    description: "Personal portfolio v1 showcasing early projects.",
    challenges: ["Clean UI", "Smooth animations"],
  },
  {
    id: "portfolio2", featured: false,
    github: "https://github.com/George-lab2004/Portfoilo2",
    link: "https://george-lab2004.github.io/Portfoilo2",
    img: PortfolioTwo, name: "Portfolio v2", images: [PortfolioTwo],
    tech: ["HTML", "CSS", "Bootstrap"],
    description: "Portfolio v2 with a different style and refined UX.",
    challenges: ["Refined UI/UX"],
  },
];

// ── Placeholder for featured projects without screenshots yet ─────
function FeaturedPlaceholder({ name, accent }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, var(--surface-2), var(--surface))` }}
    >
      <span
        className="text-4xl font-extrabold opacity-10 select-none"
        style={{ color: accent, letterSpacing: "-0.04em" }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Featured card ─────────────────────────────────────────────────
function FeaturedCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl flex flex-col"
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? project.accent + "55" : "var(--border)"}`,
        boxShadow: hovered ? `0 0 0 1px ${project.accent}22, 0 12px 40px rgba(0,0,0,0.5)` : "none",
        transition: "all 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
    >
      {/* Image / placeholder */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        {project.img ? (
          <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
        ) : (
          <FeaturedPlaceholder name={project.name} accent={project.accent} />
        )}
        {/* accent top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: project.accent }} />
        {/* label badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono"
          style={{ background: "rgba(0,0,0,0.7)", color: project.accent, backdropFilter: "blur(4px)" }}
        >
          {project.label}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-hi)" }}>{project.name}</h3>
        <p className="text-sm mb-4 flex-1 leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {project.description.slice(0, 120)}...
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tag">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpen(project)}
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 flex-1 text-center"
            style={{
              background: project.accent + "18",
              border: `1px solid ${project.accent}44`,
              color: project.accent,
            }}
            onMouseEnter={e => e.currentTarget.style.background = project.accent + "30"}
            onMouseLeave={e => e.currentTarget.style.background = project.accent + "18"}
          >
            Details
          </button>
          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            className="ghost-btn text-sm text-center"
            style={{ padding: "8px 16px", flex: 1 }}
          >
            GitHub
          </a>
          {project.link && project.link !== "#" && (
            <a
              href={project.link} target="_blank" rel="noopener noreferrer"
              className="cyan-btn text-sm text-center"
              style={{ padding: "8px 16px", flex: 1 }}
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Regular card ──────────────────────────────────────────────────
function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="card-surface rounded-xl overflow-hidden flex flex-col group cursor-default"
      onClick={() => onOpen(project)}
    >
      {project.img ? (
        <div className="h-40 overflow-hidden">
          <img
            src={project.img} alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-40" style={{ background: "var(--surface-2)" }}>
          <FeaturedPlaceholder name={project.name} accent="var(--cyan)" />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--text-hi)" }}>{project.name}</h3>
        <p className="text-xs mb-3 leading-relaxed flex-1" style={{ color: "var(--text-dim)" }}>
          {project.description.slice(0, 80)}...
        </p>
        <div className="flex gap-2">
          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold transition-colors"
            style={{ color: "var(--text-dim)" }}
            onClick={e => e.stopPropagation()}
            onMouseEnter={e => e.target.style.color = "var(--cyan)"}
            onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
          >
            GitHub →
          </a>
          {project.link && project.link !== "#" && (
            <a
              href={project.link} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors"
              style={{ color: "var(--text-dim)" }}
              onClick={e => e.stopPropagation()}
              onMouseEnter={e => e.target.style.color = "var(--cyan)"}
              onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });
  const [animated, setAnimated] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  if (isInView && !animated) setAnimated(true);

  const featured = allProjects.filter(p => p.featured);
  const regular = allProjects.filter(p => !p.featured);
  const visible = showAll ? regular : regular.slice(0, 6);

  const openModal = (p) => { setSelected(p); setShow(true); };
  const closeModal = () => { setShow(false); setSelected(null); };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title header">Projects</h2>

      {/* ── Featured 3 ── */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--cyan)" }}>
            Featured — Production Systems
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map(p => (
            <FeaturedCard key={p.id} project={p} onOpen={openModal} />
          ))}
        </div>


      </div>

      {/* ── Regular grid ── */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--border-hi)" }} />
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
            All Projects
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProjectCard project={p} onOpen={openModal} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="ghost-btn mt-8 mx-auto block"
        >
          {showAll ? "Show Less" : `Show All (${regular.length})`}
        </button>
      </div>

      {/* ── Modal ── */}
      <Dialog open={show} onClose={closeModal} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        {selected && (
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              className="rounded-xl max-w-5xl w-full flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "28px" }}
            >
              {/* Images */}
              <div className="w-full md:w-1/2">
                {selected.images && selected.images.length > 1 ? (
                  <Carousel slideInterval={4000} leftControl="‹" rightControl="›"
                    className="w-full h-56 rounded-lg overflow-hidden">
                    {selected.images.map((img, i) => (
                      <img key={i} src={img} alt={selected.name} className="object-cover w-full h-full" />
                    ))}
                  </Carousel>
                ) : selected.images && selected.images[0] ? (
                  <img src={selected.images[0]} alt={selected.name}
                    className="w-full h-56 object-cover rounded-lg" />
                ) : (
                  <div className="w-full h-56 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--surface-2)" }}>
                    <span className="text-2xl font-extrabold opacity-20"
                      style={{ color: selected.accent || "var(--cyan)" }}>{selected.name}</span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 relative">
                <button onClick={closeModal}
                  className="absolute top-0 right-0 p-1 rounded-md transition-colors"
                  style={{ color: "var(--text-dim)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text-hi)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>
                  <XMarkIcon className="w-5 h-5" />
                </button>

                {selected.label && (
                  <span className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: selected.accent || "var(--cyan)" }}>
                    {selected.label}
                  </span>
                )}
                <DialogTitle className="text-xl font-bold mt-1 mb-3"
                  style={{ color: "var(--text-hi)" }}>
                  {selected.name}
                </DialogTitle>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selected.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)" }}>
                  {selected.description}
                </p>

                <h4 className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-dim)" }}>
                  Key Features
                </h4>
                <ul className="space-y-1 mb-6">
                  {selected.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text)" }}>
                      <span style={{ color: selected.accent || "var(--cyan)" }}>—</span>{c}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="ghost-btn text-sm" style={{ padding: "8px 16px" }}>
                    GitHub
                  </a>
                  {selected.link && selected.link !== "#" && (
                    <a href={selected.link} target="_blank" rel="noopener noreferrer" className="cyan-btn text-sm" style={{ padding: "8px 16px" }}>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        )}
      </Dialog>
    </motion.section>
  );
}
