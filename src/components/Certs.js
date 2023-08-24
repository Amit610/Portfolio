import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import PJ from "../assets/certs/PJ.jpg";
import RJ from "../assets/certs/RJ.jpg";
import FD from "../assets/certs/FD.jpg";

// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="Practical JavaScript"
          img={PJ}
          issued="Skill-Lync"
          date="Jul 2023"
        />
        <CertCard
          name="React.js "
          img={RJ}
          issued="Skill-Lync"
          date="March 2023"
        />
        <CertCard
          name="Front-End Dev"
          img={FD}
          issued="Skill-Lync"
          date="Jan 2023"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
