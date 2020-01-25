import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CharacterCard = props => {
  return (
    <Card>
      <CardBody className="characterList">
        <CardTitle>{props.name}</CardTitle>
      </CardBody>
    </Card>
  );
}
export default CharacterCard;