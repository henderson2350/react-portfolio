import React from "react";
import FeaturedProject from "../FeaturedProject";
import SmallProjects1 from '../SmallProjects1'
import SmallProjects2 from '../SmallProjects2'

function ProjectContainer() {
  return (
    <div>
    <div className="row">
      <div className="col-sm-8">
        <FeaturedProject />
      </div>
      <div className="col-sm-4">
        <SmallProjects1 />
      </div>
    </div>
    
    <div className="row">
        <SmallProjects2 />
    </div>
    </div>

  );
}

export default ProjectContainer;
