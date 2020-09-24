import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addMovieAction } from "./store/actions";

export function MovieList() {
  const movies = useSelector((state: RootState) => state.movies);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Movies....</h1>
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch(addMovieAction(inputRef.current.value));
        }}
      >
        Add Movie
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </>
  );
}
