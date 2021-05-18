import React from "react";
import "./style.css";
import workoutTracker from "../../photos/workout-tracker.png";
import budgetTracker from "../../photos/budget-tracker.png";

function SmallProjects1() {
  return (
    <div>
      <div>
        <a href="https://stormy-lake-06489.herokuapp.com/stats" target="_blank">
          <img className="img-fluid photo" src={workoutTracker} />
          <p className="small-caption">Workout Tracker</p>
        </a>
      </div>
      <div>
        <a href="https://henderson2350.github.io/code-quiz/" target="_blank">
          <img className="img-fluid photo" src={budgetTracker} />
          <p className="small-caption2">Budget Tracker</p>
        </a>
      </div>
    </div>
  );
}

export default SmallProjects1;
