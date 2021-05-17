import React from "react";
import FeaturedProject from "../FeaturedProject";
import SmallProjects1 from '../SmallProjects1'
import SmallProjects2 from '../SmallProjects2'

function ProjectContainer() {
  return (
    <div>
    <div class="row">
      <div class="col-sm-10">
        <FeaturedProject />
      </div>
      <div class="col-sm-2">
        <SmallProjects1 />
      </div>
    </div>
    
    <div class="row">
        <SmallProjects2 />
    </div>
    </div>

  );
}

export default ProjectContainer;
