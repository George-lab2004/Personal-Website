import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import about from "../../assets/Aboutt.jpg";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null); // Reference for the section
  const isInView = useInView(sectionRef, { threshold: 0.2 }); // Detect if the section is in view
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has occurred

  // Effect to set hasAnimated to true when the section comes into view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.section
      ref={sectionRef} // Attach the ref here
      id="about"
      className="w-[90%] max-w-screen-lg  mx-auto flex flex-col sm:flex-row justify-between gap-5 my-24 h-auto lg:gap-10 transition-opacity duration-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only if hasAnimated is true
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image Container */}
      <div className="relative min-h-[30rem]  sm:min-h-[40rem] w-full sm:w-1/2 flex items-center justify-center mb-7 mt-7 sm:mt-0">
        {/* Image Layer */}
        <img src={about} className="h-[95%] z-40 relative" alt="" />

        {/* Background Layer (positioned correctly) */}
        <div className="absolute h-[95%] bg-black w-[75%] -right-3 -bottom-3 sm:bottom-0.5 z-0"></div>
      </div>

      {/* Content Section */}
      <div className="min-h-[30rem] sm:min-h-[40rem] w-full sm:w-1/2 flex flex-col justify-center sm:gap-6 gap-4 ">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-black w-fit header pb-2">
          About Me
        </h2>
        {/* Description */}
        <p className="text-lg mb-6 leading-relaxed">
          I’m George Milad, a Frontend Developer based in Cairo, Egypt, with
          expertise in HTML, CSS, JavaScript, and React. I specialize in
          building dynamic, responsive, and user-friendly web applications, with
          experience using tools like GitHub, and Material-UI. I am passionate
          about continuous learning and delivering quality solutions.
        </p>
        {/* Info Section */}
        <div className="border-2 border-black p-5 rounded-lg flex flex-col gap-4 sm:overflow-x-auto overflow-x-scroll ">
          {/* Two Column Data Layout */}
          <div className="flex flex-col sm:flex-row justify-between sm:gap-8 gap-2">
            {/* Left Column */}
            <div className="flex flex-col gap-2">
              <div>
                <FaUser className="inline text-amber-800 mr-2" />
                <span className="sm:abt-data font-bold">Name:</span> George
                Milad
              </div>
              <div>
                <FaMapMarkerAlt className="inline text-red-500 mr-2" />
                <span className="sm:abt-data font-bold">Address:</span> I'm from
                Egypt
              </div>
              <div>
                <FaPhone className="inline text-green-500 mr-2" />
                <span className="sm:abt-data font-bold">Phone:</span>{" "}
                (20+)1225841430
              </div>
              <div>
                <FaBriefcase className="inline text-amber-900 mr-2" />
                <span className="sm:abt-data font-bold">Internship:</span>{" "}
                Software Developer at Hits Company
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-2">
              <div>
                <FaEnvelope className="inline text-blue-500 mr-2" />
                <span className="sm:abt-data font-bold">Email:</span>{" "}
                George.milad2@gmail.com
              </div>
              <div>
                <FaGraduationCap className="inline text-purple-500 mr-2" />
                <span className="font-bold">Study:</span> Business Technology
              </div>
              <div>
                <span className="font-bold">Certificates:</span>
                <ul className="list-disc list-inside">
                  <li>Diploma in Frontend Development from Route Academy</li>
                  <li>JSB in Frontend Development from Upskilling EG</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Data (Full Width) */}
          <div>
            <div>
              <FaUniversity className="inline text-indigo-500 mr-2" />
              <span className="font-bold">University:</span> Dual Degree from
              Canadian International College in Egypt and Cape Breton University
              in Canada
            </div>
            <div>
              <span className="font-bold">GPA:</span> 3.86
            </div>
          </div>
        </div>
        <a href="#contact">
          <button className="bg-cyan-700 text-white w-fit p-2 rounded-full ms-1 px-5 font-bold hover:bg-white hover:text-cyan-700 cursor-pointer mb-7">
            Hire Me
          </button>
        </a>
      </div>
    </motion.section>
  );
}
