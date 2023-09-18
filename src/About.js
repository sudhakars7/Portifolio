import React from "react";
import { Link } from "react-router-dom";

import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hi, I'm [Your Name], a passionate web developer with a love for
        creating modern and user-friendly web applications.
      </p>
      <p>
        My goal is to build web applications that not only look great but also
        provide outstanding user experiences. I have expertise in front-end
        technologies such as React and modern CSS frameworks, and I'm always
        eager to learn and stay up-to-date with the latest web development
        trends.
      </p>
      <p>
        Feel free to <a href="/contact">contact me</a> if you have any
        inquiries or if you'd like to collaborate on a project.
      </p>
    </div>
  );
};

export default About;
