import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Project(props) {
  return (
    <div>
      <Card id="card" style={{ width: "21rem" }}>
        <div id="card-image">
          <Card.Img variant="top" src={props.photo} />
        </div>
        <div>
          <Card.Body id="card-body">
            <Card.Title id="card-title">{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <div id="btn-div">
              <Button id="btn" href={props.GhLink} target='_blank'>
                Github Link
              </Button>
              {props.deployedLink ? <Button id="btn" href={props.deployedLink} target='_blank'>
                Deployed Link
              </Button> : ''}
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Project;
