import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../Utils/constants";

const GptSearch = () => {
  
  return (
    <>
      <div className="fixed -z-10 ">
        <img className=" w-screen h-screen object-cover " src={NETFLIX_BG} alt="Netflix Background" />
      </div>
      <div className=" md:pt-0">
      <div><GptSearchBar/></div>
      <div><GptMovieSuggestions/></div>

      </div>
    </>
  );
};

export default GptSearch;
