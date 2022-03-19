import * as React from "react";
import movies from "./nowPlaying.json";
import { useState } from "react";
import { motion } from "framer-motion";

function MoviePoster() {
  const moviess = movies;

  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <>
      <div className="justify-center flex flex-wrap gap-10 p-10 content-center max-w-7xl m-auto	">
        {moviess.MovieFeedEntries.slice(0, visible).map((movie) => (
          <div>
            {movie.Movie.Media.filter(
              (objectlist) => objectlist.SubType == "TV_SmallPosterImage"
            ).map((moviePoster) => (
              <img className="Toplist" src={moviePoster.SecureUrl} />
            ))}
            <p className="text-gray-400 text-center">{movie.Movie.Title}</p>
          </div>
        ))}
      </div>
      {visible < moviess.MovieFeedEntries.length && (
        <div class="mx-8 text-center text-white">
          <div className="p-2 w-full">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              onClick={showMoreItems}
              className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg"
            >
              Load More
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePoster;
