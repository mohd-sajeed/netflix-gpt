import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import  Footer from "./Footer"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative mt-0 md:-mt-52 z-20 pl-2 md:pl-12 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"TopRated"} movies={movies.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
      
      <Footer/>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
