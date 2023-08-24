import React from "react";
import hr from "../assets/curve-hr.svg";
import EduCard from "./EduCard";

export default function Edu() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Education</h1>
      <p className="font-light text-gray-400">My Education journey</p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <EduCard name="SSC" Date="2014-2015" percent="80%" />
        <EduCard name="Diploma" Date="2017-2019" percent="77%" />
        <EduCard name="B-Tech" Date="2019-2022" percent="CGPA 8" />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
