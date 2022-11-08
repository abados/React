import React from "react";
import { useState } from "react";
import { TableContent } from "./tableContent";
import { getMoviesFromServer } from "../services/moviesServices";

function compare(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

export const MovieComponent = (props) => {
  let moviesDB = getMoviesFromServer();
  const [movies, setMovies] = useState(moviesDB.sort((a, b) => compare(a, b)));

  const handleDelete = (id) => {
    let newData = movies.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setMovies(newData);
  };

  const restoreData = () => {
    setMovies(moviesDB);
  };

  const handleIsLike = (id, isLike) => {
    //get movie by id
    let movie = movies.find((m) => m.id === id);
    //check if movie exists not equal to null or undefined
    if (movie) {
      //change the status isLike
      movie.isLike = isLike;
    }
    //get all movies that not effected, not equal to the id
    let moviesArrayWithoutTheEdition = movies.filter((m) => m.id !== id);

    //create new array that contains the movies and the new movie that was edited
    let newData = [...moviesArrayWithoutTheEdition, movie].sort((a, b) =>
      compare(a, b)
    );

    setMovies(newData);
  };
  return (
    <div>
      <h1>Number of elements: {movies.length}</h1>
      <TableContent
        deleteRaw={handleDelete}
        moviesArr={movies}
        handleLike={handleIsLike}
        restoreData={restoreData}
      ></TableContent>
    </div>
  );
};
