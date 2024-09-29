import React from "react";
import "./About.css";
import aboutusvideo from "../../assets/about.png";
import playbutton from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="About">
      <div className="about-left">
        <img src={aboutusvideo} className="about-us-video" />
        <img src={playbutton} className="play-button" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Building Leaders For Future</h2>
        <p>
          Education is the cornerstone of progress and the catalyst for personal
          and societal transformation. It empowers individuals with the
          knowledge, skills, and perspectives necessary to navigate the
          complexities of the modern world. Beyond imparting academic knowledge,
          education fosters critical thinking, creativity, and problem-solving
          abilities, equipping learners to adapt and thrive in an ever-evolving
          landscape
        </p>
        <p>
          Ultimately, education is not merely about acquiring qualifications or
          degrees; it is a lifelong journey of discovery and personal growth. It
          cultivates a thirst for knowledge and a passion for lifelong learning,
          enabling individuals to pursue their passions and make a difference in
          the world. As Nelson Mandela once said, "Education is the most
          powerful weapon which you can use to change the world." Thus,
          investing in education is not only an investment in individuals but
          also in the collective future of humanity.
        </p>
      </div>
    </div>
  );
};

export default About;
