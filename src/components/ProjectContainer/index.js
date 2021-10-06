import React from "react";
import Project from "../Project";
import './style.css'

// Importing photos
import cookbook from "../../photos/cookbook.png";
import employeeDirectory from "../../photos/employee-directory.png";
import workdayScheduler from "../../photos/work-day.png";
import workoutTracker from "../../photos/workout-tracker.png";
import budgetTracker from "../../photos/budget-tracker.png";
import spaceDashboard from "../../photos/weather-photo.jpg";
import readMeGenerator from '../../photos/readme-generator.png'
import artPortfolio from '../../photos/art-port.png';
import theLocal from '../../photos/the-local.png';

const projects = [
  {
    name: "ART PORTFOLIO",
    photo: artPortfolio,
    description: '',
    ghLink: 'https://github.com/henderson2350/painting-portfolio2',
    deployedLink: 'https://henderson2350.github.io/painting-portfolio2/#/'
  },
  {
    name: "COOKBOOK",
    photo: cookbook,
    GhLink: "https://github.com/henderson2350/cookbook",
    deployedLink: "https://intense-savannah-49257.herokuapp.com/",
    description: "",
  },
  {
    name: "THE LOCAL",
    photo: theLocal,
    GhLink: 'https://github.com/hanfernan/the-local',
    deployedLink: 'https://lit-retreat-16918.herokuapp.com/',
    description: ''

  },
  {
    name: "SPACE DASHBOARD",
    photo: spaceDashboard,
    GhLink: "https://github.com/Joshwrightdev/Project-1",
    deployedLink: "https://joshwrightdev.github.io/Project-1/",
    description: "",
  },
  {
    name: "WORKDAY SCHEDULER",
    photo: workdayScheduler,
    GhLink: "https://github.com/henderson2350/work-day",
    deployedLink: "https://henderson2350.github.io/work-day/",
    description: "",
  },
  {
    name: "WORKOUT TRACKER",
    photo: workoutTracker,
    GhLink: "https://github.com/henderson2350/workout-tracker",
    deployedLink: "https://stormy-lake-06489.herokuapp.com/?id=60968e3c5ff7e20015a0e21b",
    description: "",
  },
  {
    name: "BUDGET TRACKER",
    photo: budgetTracker,
    GhLink: "https://github.com/henderson2350/budget-tracker",
    deployedLink: "https://frozen-atoll-39935.herokuapp.com/",
    description: "",
  },
  {
    name: 'README GENERATOR',
    photo: readMeGenerator,
    GhLink: "https://github.com/henderson2350/good-readme-generator",
    description: ""
  }
];

function ProjectContainer() {
  return (
    <div id="project-container" className="row">
      {projects.map((project) => {
        return (
          <Project
            name={project.name}
            photo={project.photo}
            description={project.description}
            GhLink={project.GhLink}
            deployedLink={project.deployedLink}
          />
        );
      })}
    </div>
  );
}

export default ProjectContainer;
