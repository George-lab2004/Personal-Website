import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import img from "../../assets/laptop.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  const cvFile = "/George-Milad.pdf"; // Correct path to the PDF file in the public directory
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 90,
  });
  return (
    <section id="home">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 h-screen w-screen">
        <div className="flex-col lg:w-2xl">
          <h5 className="text-cyan-700 text-lg font-bold">Hello I'm </h5>
          <h5 className="text-4xl lg:text-6xl font-bold ">George Milad </h5>
          <p className="mt-3  text-lg">
            Frontend{" "}
            <span className="text-cyan-700">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </p>
          <p className="mt-3 ">
            Crafting sleek, responsive, and high-performance web experiences
            that bring your vision to life. From dynamic user interfaces to
            seamless navigation, I build modern solutions that engage and
            convert. Let's turn your ideas into reality with clean code and
            cutting-edge design!
          </p>
          <div className="mt-3">
            <div className="icons flex space-x-5">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/george-milad-6ba747250/"
                target="_blank"
                rel="noopener noreferrer"
                className="border text-blue-700 p-2 rounded-lg cursor-pointer hover:scale-110 hover:text-cyan-700  bg-white transition-colors duration-300"
              >
                <GrLinkedinOption />
              </a>
              {/* GitHub Icon */}
              <a
                href="https://github.com/George-lab2004"
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg p-2 cursor-pointer hover:scale-110 hover:text-cyan-700 duration-300 bg-white"
              >
                <AiFillGithub size={"20px"} />
              </a>
            </div>
          </div>
          <a
            href={cvFile}
            download="George_Milad_CV.pdf" // This will set the filename when downloading
            className="mt-5 inline-block bg-cyan-500  px-6 py-3 rounded-md text-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400 text-black"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full mb-40 md:mb-0  lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <img
            src={img}
            alt="George Milad"
            className="rounded-lg shadow-xl  object-cover w-full mb-10 md:mb-0 h-96 max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
