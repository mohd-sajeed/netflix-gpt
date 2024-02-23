import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results))
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return <div>useTopRatedMovies</div>;
};

export default useTopRatedMovies;