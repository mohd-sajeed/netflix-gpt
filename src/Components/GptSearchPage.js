import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../Utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG} alt="Netflix Background" />
      </div>
      <div><GptSearchBar/></div>
      <div><GptMovieSuggestions/></div>
    </>
  );
};

export default GptSearch;
