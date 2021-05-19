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

const projects = [
  {
    name: "COOKBOOK",
    photo: cookbook,
    GhLink: "https://github.com/henderson2350/cookbook",
    deployedLink: "https://intense-savannah-49257.herokuapp.com/",
    description: "",
  },
  {
    name: "EMPLOYEE DIRECTORY",
    photo: employeeDirectory,
    GhLink: "https://github.com/henderson2350/employee-directory",
    deployedLink: "https://henderson2350.github.io/employee-directory/",
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
    name: "SPACE DASHBOARD",
    photo: spaceDashboard,
    GhLink: "https://github.com/Joshwrightdev/Project-1",
    deployedLink: "https://joshwrightdev.github.io/Project-1/",
    description: "",
  },
  {
    name: "WORKOUT TRACKER",
    photo: workoutTracker,
    GhLink: "https://github.com/henderson2350/workout-tracker",
    deployedLink: "https://stormy-lake-06489.herokuapp.com/stats",
    description: "",
  },
  {
    name: "BUDGET TRACKER",
    photo: budgetTracker,
    GhLink: "https://github.com/henderson2350/budget-tracker",
    deployedLink: "https://frozen-atoll-39935.herokuapp.com/",
    description: "",
  },
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
