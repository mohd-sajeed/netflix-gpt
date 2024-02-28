import { API_OPTIONS } from "./constants";


const useSearchMovieTMDB = () => {
  
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    return json?.results;
  };
  return searchMovieTMDB
};

export default useSearchMovieTMDB;
