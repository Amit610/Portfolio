import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import HTML from "../assets/skills/html.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import node from "../assets/skills/nodejs.svg";
import Bootstrap from "../assets/skills/bootstrap.svg";
import MongoDB from "../assets/skills/mongodb.png";
import github from "../assets/skills/github.svg";
import git from "../assets/skills/git.svg";
import express from "../assets/skills/express.svg";
import gitlab from "../assets/skills/gitlab.svg";

import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="javascript" experience="1 years" img={javascript} />
          <SkillCard name="HTML" experience="1 years" img={HTML} />

          <SkillCard name="tailwind" experience="1 years" img={tailwind} />
          <SkillCard name="MongoDB" experience="1 years" img={MongoDB} />
          <SkillCard name="express" experience="1 years" img={express} />
          <SkillCard name="React.js" experience="1 years" img={reactIcon} />
          <SkillCard name="Node.js" experience="1 years" img={node} />
          <SkillCard name="git" experience="1 years" img={git} />
          <SkillCard name="gitlab" experience="1 years" img={gitlab} />
          <SkillCard name="github" experience="1 years" img={github} />
          <SkillCard name="Bootstrap" experience="1 years" img={Bootstrap} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
