import React from "react";
import { Route, Link } from "react-router-dom";

import CharacterCard from "./CharacterCard"

const Character = props => {
    return(<CharacterCard 
        key = {props.id}
        name = {props.name}
      />)
}
export default Character;