import { useState } from "react";

import profile from "../assets/profie.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";
import Linkedin from "../assets/linkedin.svg";
import Loading from "../assets/480.gif";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          <img src={Loading} alt=".." />
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full  h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8 ">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Amit Jadhav</h1>
            <p class="text-xl font-bold text-gray-300">Full-Stack Developer</p>
            <p className="text-md font-light text-white-400  ">
              full-Stack Developer specializing in React.js with a strong
              foundation in development principles. Completed relevant courses
              and stay updated on industry trends. Quick learner with practical
              project experience, translating client requirements into intuitive
              interfaces. Developed personal portfolio and contributed to
              collaborative e-commerce platform with responsive design and
              secure payment integration. Known for strong communication and
              collaboration skills, fostering productive teamwork and client
              interactions. Proactive in seeking new learning opportunities and
              eager to tackle innovative projects.
            </p>
          </div>

          <ul className="flex mt-5 pl-7 gap-4 items-center">
            <li>
              <a
                href="https://github.com/Amit610"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/amit-jadhav-974199135"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Linkedin} style={{ width: "45px" }} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
