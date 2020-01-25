import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Route, Link } from "react-router-dom";
import Character from "./Character";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="characterList">
      <Link to={`/characterList/${props.id}`}>
            <p>{props.name}</p>
          </Link>
      </CardBody>
    
   
  </Card>
  );
}
export default CharacterCard;