import * as React from "react";
import movies from "./nowPlaying.json";

function MoviePoster() {
  console.log(movies);
  const moviess = movies;

  return (
    <div className="justify-center flex flex-wrap gap-10 p-10 content-center max-w-7xl m-auto	">
      {moviess.MovieFeedEntries.map((movie) => (
        <div>
          {movie.Movie.Media.filter(
            (x) => x.SubType == "TV_SmallPosterImage"
          ).map((moviePoster) => (
            <img src={moviePoster.SecureUrl} />
          ))}
          <p className="text-gray-400 text-center">{movie.Movie.Title}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviePoster;
