import React from "react";
import Header from "../UI/Header";

import resume from "../assets/resume-2.png";
import resumeBottom from "../assets/resume-2-bottom.png";

const Resume = () => {
  return (
    <section className="resume-screen">
      <Header />
      <div className="resume-container">
        <img className="resume" src={resume} alt="marcus_johnson_resume" />
        <img
          className="resume"
          src={resumeBottom}
          alt="marcus_johnson_resume"
        />
      </div>
    </section>
  );
};

export default Resume;
