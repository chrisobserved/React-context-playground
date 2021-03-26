import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <nav className="navbar">
      <h3>Movies App Context Demo</h3>
      <p>Number of movies in list: {movies.length}</p>
    </nav>
  );
};

export default Nav;
