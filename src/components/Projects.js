import ProjectCard from "./ProjectsCard.js";

import hr from "../assets/curve-hr.svg";

export default function Projects() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my Projects</p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="News App"
          Created="React.js and API"
          desc="I have developed a dynamic news application using React.js and API integration, presenting an array of captivating features. Stay updated with the latest headlines effortlessly, explore news across diverse categories, all within an intuitively designed user interface. Your news consumption experience just got smarter and more enjoyable."
        />
        <ProjectCard
          name="Portfolio"
          Created="Reacr.js"
          desc="I have crafted a sleek portfolio website using React, boasting a simple yet intuitive user interface that ensures seamless navigation. Explore my work and journey effortlessly while enjoying a user-friendly design."
        />
        <ProjectCard
          name="Password Generator"
          Created="HTML/CSS and JavaScript"
          desc="I've developed a Password Generator using JavaScript, enabling the creation of secure and customizable passwords. Safeguard your digital presence with this efficient tool, providing peace of mind through strong password generation."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
