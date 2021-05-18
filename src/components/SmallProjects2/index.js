import React from "react";
import "./style.css";
import cookbook from "../../photos/cookbook.png";
import readMeGenerator from "../../photos/readme-generator.png";
import workdayScheduler from "../../photos/work day.png";

const projects = [
  {
    name: "Cookbook",
    photo: cookbook,
    link: "https://intense-savannah-49257.herokuapp.com/",
  },
  {
    name: "ReadMe Generator",
    photo: readMeGenerator,
    link: "https://github.com/henderson2350/good-readme-generator",
  },
  {
    name: "Workday Scheduler",
    photo: workdayScheduler,
    link: "https://henderson2350.github.io/work-day/",
  },
];

function SmallProjects2() {
  return (
    <div>
    {projects.map((project) => {
      return (
        <a href={project.link} target="_blank">
          <img className="img-fluid photo" src={project.photo} />
          <p className="small-caption2">{project.name}</p>
        </a>
      )
    })}
  </div>
  )
}

export default SmallProjects2;
