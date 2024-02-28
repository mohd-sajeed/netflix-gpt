import openai from "./openai";
import { addGptMovieResults } from "./gptSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useSearchMovieTMDB from "./useSearchMovieTMDB";

const useGptSearchClick = () => {
  const [searchText,setSearchText]=useState(null)
  const dispatch = useDispatch();
  const searchMovieTMDB = useSearchMovieTMDB();

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // use this SearchText to make an API call to GPT API and get the movie results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText +
      "only give me names of 5 movies, comma seperated like the example result given ahead.Example Results: Andaz Apna Apna, Golmaal, Hera Pheri, Welcome, 3 idiots ";

    const getGptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getGptResults.choices) {
      // TODO: Write Error Handling
    }

    // console.log(getGptResults.choices[0].message.content);

    const gptMovies = getGptResults.choices[0].message.content.split(",");
    // console.log(gptMovies);

    // Search each movie in TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // console.log(promiseArray)

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return {handleGptSearchClick,searchText,setSearchText};
};

export default useGptSearchClick;
