import React from "react";
import { Route, Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";

const Character = props => {

    return(
        <Link to={`/characterList/${props.id}`}>
            <p>{props.name}</p>
            <p>hi</p>
        </Link>
    )
}
export default Character;