import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Route, Link } from "react-router-dom";
import Character from "./character";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="characterList">
      <Link to={`/characterList/${props.id}`}>
            <p>{props.name}</p>
          </Link>
      </CardBody>
    
    <Route
    path="/characterList/:id"
    render={props => <Character {...props} characters={characters} />}
  />
  </Card>
  );
}
export default CharacterCard;