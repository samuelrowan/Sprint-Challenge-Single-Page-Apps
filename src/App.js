import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

export default function App() {
  const [ characters, setCharacters ] = useState([]);

  return (
    <main>
      <Header />
      <Link to="/characterList">characters</Link>
      <Route
        exact
        path="/characterList"
        render={props => <CharacterList {...props} characters={characters} />}
      />
      <Route
        path="/characterList/:id"
        component={Character} />
    </main>
  );
}
