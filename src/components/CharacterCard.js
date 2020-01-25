import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Route, Link } from "react-router-dom";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="characterList">
      <Link to={`/characterList/${props.id}`}>
            <p>{props.name}</p>
          </Link>
          {/* there is something wrong with this link. it shows "undefined" in the URL */}
      </CardBody>
    </Card>
    <Route
    path="/characterList/:id"
    render={props => <Character {...props} characters={characters} />}
  />
  );
}
export default CharacterCard;