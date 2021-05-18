import React from "react";
import "./style.css";
import photo from "../../photos/weather-photo.jpg";

const name = "Cookbook";

function FeaturedProject() {
  return (
    <div>
      <a href="https://joshwrightdev.github.io/Project-1/" target="_blank">
        <img className="img-fluid" id="large-photo" src={photo} />
        <p id="large-caption">{name}</p>
      </a>
    </div>
  );
}

export default FeaturedProject;
