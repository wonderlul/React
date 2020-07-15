import React from "react";
import MoviesService from "../../services/movies.service";
import { Link } from "react-router-dom";

const movies = MoviesService.getMovies();

const MoviesListPage = () => {
  return (
    <div>
      <h3>Movies list</h3>
      <h2>
        {movies.map((movie) => (
          <p key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </p>
        ))}
      </h2>
    </div>
  );
};

export default MoviesListPage;
