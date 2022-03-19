import * as React from "react";
import Movies from "./nowPlaying.json"





const Movies = () => {

  const movies= movies;

  return (
    <>
{

      movies.MovieFeedEntries.map(movie =>(
      <div className="section">
        {}
        <img src={movie.Movie.Media[0].SecuredUrl}/>
        <li>{movie.Movie.Title}</li>





      </div>
      ))



}
    </>
  );
};

export default Movies;
