import React from "react";
import photo from "../../photos/portfolio-photo.JPG";
import "./style.css";

function AboutMeContent() {
  return (
    <div id="about-me-row" className="row">
      <div id="about-me-title-div" className="col-sm-2 align-self-center">
        <h1>About me</h1>
      </div>
      <div id="about-me-div" className="col-sm-8 align-self-center">
        <p id="about-me-text" className="class-center">
          I am a Full Stack Web Developer applying coding background and a
          strong technical skill set towards building applications. I have a
          certificate in full stack web development from Georgia Institute of
          Technology, and earned my bachelor’s degree in 2021 at the University
          of Virginia. I am proficient in HTML, CSS, JavaScript, server-side
          APIs, Node.js, Express.js, mySQL, Heroku, and more. My specific areas
          of interest and abilities include object-oriented programming,
          algorithms, and server-side APIs. During my education and experience
          in the workforce, which includes two food service jobs and a product
          development internship, I learned that I thrive in collaborative
          scenarios. I believe web development at a company with an emphasis on
          teamwork would be a great fit for me. I bring creativity, technical
          skill, an open mind and enthusiasm to all my work.
        </p>
      </div>
      <div id="photo-me-div" className="col-sm-2 align-self-center">
        <img id="photo-me" src={photo} />
      </div>
    </div>
  );
}

export default AboutMeContent;
