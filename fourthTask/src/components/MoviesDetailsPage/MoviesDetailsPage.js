import React from "react";

import { useParams, useHistory, Redirect } from "react-router-dom";

import MoviesService from "../../services/movies.service";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const movie = MoviesService.getMovieById(movieId);
  if (!movie) {
    return <Redirect to="/movies" />;
  }

  return (
    <div>
      <button onClick={history.goBack}>Go back</button>
      <h2>Movie title: {movie.title}</h2>
      <h2>
        Movie poster:
        <div>
          <img src={movie.poster} />
        </div>
      </h2>
      <h2>Movie rating: {movie.rating}</h2>
    </div>
  );
};

export default MoviesDetailsPage;
