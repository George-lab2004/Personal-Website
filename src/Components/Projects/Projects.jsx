import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

// Import images
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
export default function Projects() {
  const projects = [
    {
      github: "https://github.com/mohamedreda850/quizapp",
      link: "https://quizapp-wine-one.vercel.app/",
      img: Quiz,
      name: "QuizApp",
      images: [Quiz],
      tech: [
        "React",
        "Tailwind CSS",
        "Typescript",
        "JWT decode",
        "Flowbite",
        "React-Hook-Form",
      ],
      description:
        "This platform is designed to revolutionize how quizzes are created, managed, and experienced. With features tailored for educators and students, it simplifies the learning process while offering insightful analytics to enhance assessments.",
      challenges: [
        "Secured Authentication",
        "Quiz Management",
        "Admin Portal",
        "Student Portal",
        "Quiz Participation",
        "Results Tracking",
      ],
    },
    {
      github: "https://github.com/George-lab2004/FoodApp",
      link: "https://food-app-ten-roan.vercel.app/",
      img: FoodApp,
      name: "FoodApp",
      images: [FoodApp],
      tech: [
        "React",
        "Bootstrap",
        "Font-awesome",
        "JWT decode",
        "React Router DOM",
        "Axios",
        "React pro sidebar",
        "React Toastify",
        "Use-Context",
      ],
      description:
        "A comprehensive recipe management platform with separate portals for admins and users. Admins can manage users, categories, and recipes, while users can browse, search, and save their favorite recipes. 🍔",
      challenges: [
        "Secured Authentication",
        "Admin Portal",
        "User Portal",
        "Recipe Managing",
        "Category Managing",
        "Favourite List ",
      ],
    },
    {
      github: "https://github.com/George-lab2004/E-commerce",
      link: "https://e-commerce-tfkl.vercel.app/",
      img: FreshCart,
      name: "FreshCart",
      images: [FreshCart],
      tech: [
        "React",
        "Tailwind CSS",
        "Axios",
        "React Icons",
        "Formik",
        "React-Hot Toast",
        "Use-Context",
      ],
      description:
        "a comprehensive e-commerce platform I built, designed to provide a smooth and intuitive shopping experience with shopping cart and checkout. 🛒",
      challenges: [
        "Authentication Module",
        "Built a full shopping cart.",
        "Implemented API calls for product data.",
      ],
    },
    {
      github: "https://github.com/mohamedreda850/hms",
      link: "https://hmslast.netlify.app/auth/login",
      img: Hotel,
      name: "Hotel Booking",
      images: [Hotel],
      tech: ["React", "Tailwind", "Firebase"],
      description:
        "his project is designed to transform the way users experience hotel reservations, making it seamless and user-friendly.🏨",
      challenges: [
        "Implemented Firebase authentication.",
        "Created a responsive and modern UI with Tailwind.",
        "React-Router DOM",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Dashboard",
      link: "https://dashboard-rho-peach.vercel.app/",
      img: Dashboard,
      name: "Dashboard",
      images: [Dashboard],
      tech: [
        "React",
        "Tailwind CSS",
        "Framer-Motion",
        "lucide-icons",
        "react-i18n",
      ],
      description:
        "provides an intuitive interface for managing products, users, sales, orders, and analytics. It features interactive charts, animations, and multilingual support, all within a modern, responsive design",
      challenges: [
        "Responsive Design",
        "Multiple Chart Integrations",
        " Multilingual Support",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Movie-App",
      link: "https://movie-app-mocha-ten.vercel.app/",
      img: Movie,
      name: "Movie App",
      images: [Movie],
      tech: ["React", "API", "CSS"],
      description: "A movie database app with search functionality. 🎬",
      challenges: [
        "Used an API to fetch and display movie data.",
        "Implemented dynamic search functionality.",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Yummy-App",
      link: "https://george-lab2004.github.io/Yummy-App/",
      img: Yummy,
      name: "Yummy",
      images: [Yummy],
      tech: ["JavaScript", "CSS", "API"],
      description:
        "A recipe app featuring a variety of dishes, allowing users to explore by area, ingredients, and search with ease 🍽️.",
      challenges: [
        "Authentication Module",
        "Used an external API for recipes.",
        "Implemented an efficient filtering system.",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Weather-api",
      link: "https://george-lab2004.github.io/Weather-api",
      name: "Weather App",
      img: Weather,
      images: [Weather],
      tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
      description: "A real-time weather app using an API. ☁️",
      challenges: [
        "Integrated a weather API for real-time data.",
        "Styled the UI to match real-world weather conditions.",
      ],
    },
    {
      github: "https://github.com/George-lab2004/OOP-games",
      link: "https://george-lab2004.github.io/OOP-games",
      img: Games,
      name: "OOP Games",
      images: [Games],
      tech: ["JavaScript", "OOP", "Canvas"],
      description:
        "A set of small games built using Object-Oriented Programming. 🎮",
      challenges: [
        "Applied OOP principles to game development.",
        "Optimized performance for smooth animations.",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Crud-System",
      link: "https://george-lab2004.github.io/Crud-System/",
      img: Crud,
      name: "CRUD System",
      images: [Crud],
      tech: ["JavaScript", "Bootstrap", "Local Storage"],
      description: "A simple CRUD system for managing user data. 📝",
      challenges: [
        "Implemented local storage for data persistence.",
        "User can add, delete and update data.",
      ],
    },

    {
      github: "https://github.com/George-lab2004/Porfoilo",
      link: "https://george-lab2004.github.io/Porfoilo",
      img: Portfolio,
      name: "Portfolio",
      images: [Portfolio],
      tech: ["HTML", "CSS", "Bootstrap"],
      description: "A personal portfolio showcasing projects and skills. 🌟",
      challenges: [
        "Designed a clean and modern UI.",
        "Added smooth animations and transitions.",
      ],
    },
    {
      github: "https://github.com/George-lab2004/Portfoilo2",
      link: "https://george-lab2004.github.io/Portfoilo2",
      img: PortfolioTwo,
      name: "Portfolio v2",
      images: [PortfolioTwo],
      tech: ["HTML", "CSS", "Bootstrap"],
      description: "A second version of a portfolio with diffrent style. 🚀",
      challenges: ["Refined UI/UX for different user experience."],
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  function handleShowAll() {
    setShowAll(!showAll);
  }

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setSelectedProject(null);
  };

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div>
      <motion.div
        id="projects"
        className="py-8 px-4"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="my-5 mb-6 text-4xl font-extrabold w-fit mx-auto text-gray-900 border-b-4 pb-1.5 border-black">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(showAll ? projects : projects.slice(0, 4)).map((item) => (
            <div
              key={item.name}
              className="bg-white border rounded-lg shadow-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.description.slice(0, 30)}...
                <button
                  onClick={() => handleShow(item)}
                  className="text-blue-500 font-semibold ml-1 transition cursor-pointer hover:text-blue-700"
                >
                  Read More
                </button>
              </p>
              {/* Buttons Section */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleShowAll}
          className="mt-6 px-6 py-2 bg-black text-white rounded-md mx-auto block hover:bg-gray-800 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </motion.div>

      {/* MODAL */}
      <Dialog open={show} onClose={handleClose} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/60" />

        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-lg shadow-xl max-w-7xl w-full p-6 sm:p-8 flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
              {/* Images */}
              <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={selectedProject.name}
                    className="rounded-lg shadow-md w-full max-h-64 object-cover"
                  />
                ))}
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedProject.name}
                </DialogTitle>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <h4 className="mt-4 font-semibold text-gray-900">
                  Challenges:
                </h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    className="text-green-600 font-semibold hover:text-green-800 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </DialogPanel>
          </div>
        )}
      </Dialog>
    </div>
  );
}
