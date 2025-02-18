import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "../../assets/contact-img.svg";
import { useInView, motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bq8e7ia", // Replace with your EmailJS Service ID
        "template_5td4aop", // Replace with your EmailJS Template ID
        formRef.current,
        "q5he97byk5mWoXDL2" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        },
        (error) => {
          setLoading(false);
          console.error("Email sending error:", error);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };
  const sectionRef = useRef(null);
  const IsinView = useInView(sectionRef, { threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  if (IsinView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <motion.section
      id="contact"
      className="py-10 px-4"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly down
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      <ToastContainer />
      <h1 className="text-4xl font-bold border-b-4 pb-2 border-black mx-auto w-fit mb-6 text-gray-800">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-5xl">
        {/* Contact Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Contacts}
            className="w-full max-w-xs lg:me-28 md:max-w-md"
            alt="Contact Illustration"
          />
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-1 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F5F5F5] text-gray-800"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F5F5F5] text-gray-800"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-1 text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F5F5F5] text-gray-800 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-700 cursor-pointer text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
