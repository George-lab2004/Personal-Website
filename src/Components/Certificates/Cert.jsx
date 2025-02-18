import Route from "../../assets/Route.jpg";
import JSB from "../../assets/Upskilling.jpeg";

function Certificates() {
  return (
    <div id="cert">
      {/* Header Section */}
      <div
        className="flex justify-center items-center content-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl header text-center w-fit border-b-4 border-black mx-auto py-2">
          My Certificates
        </h1>
      </div>

      {/* Certificates Section */}
      <div
        className="mx-auto flex items-center justify-center mt-4 flex-wrap sm:flex-col md:flex-row"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {/* First Certificate */}
        <div className="w-[250px] sm:w-[400px] sm:h-[300px] mb-8 mx-4 cursor-pointer tilt-container">
          <img
            src={JSB}
            className="w-full h-full object-cover rounded-lg shadow-lg tilt-image"
          />
        </div>

        {/* Second Certificate */}
        <div className="w-[250px] sm:w-[400px] sm:h-[300px] mb-8 mx-4 cursor-pointer tilt-container">
          <img
            src={Route}
            className="w-full h-full object-cover rounded-lg shadow-lg tilt-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
