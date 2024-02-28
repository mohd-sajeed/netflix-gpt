import React from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import useGptSearchClick from "../Utils/useGptSearchClick";
import useSearchMovieTMDB from "../Utils/useSearchMovieTMDB";

const GptSearchBar = () => {
  const langSelect = useSelector((store) => store.config.lang);


  // const handleGptSearchClick = useGptSearchClick();
  const {searchText,setSearchText,handleGptSearchClick} = useGptSearchClick()
   useSearchMovieTMDB();

  const handleClick=()=>{
    handleGptSearchClick(setSearchText)
  }

  return (
    <div className=" pt-[30%] md:pt-[10%] flex justify-center flex-col md:flex-row">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md my-4 md:my-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          
          className="col-span-9 px-4 py-2 m-4 rounded-md"
          type=" text"
          placeholder={lang[langSelect].gptSearchPlaceholder}
        />

        <button
          className="col-span-3 bg-red-500 m-4 rounded-md"
          onClick={handleClick}
        >
          {lang[langSelect].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

/* 
<form className=" py-2 bg-black w-1/2 mx-auto" >
        <div className="flex justify-center items-center h-12">
          <div className=" px-4 flex-1 ">
            <input
              className="w-full px-4 py-2 my-2 rounded-sm"
              type=" text"
              placeholder="What would you like to watch today?"
              
            />
          </div>
        <div className="px-4">
          <button className="bg-red-500 text-white px-12 py-2 rounded-lg">
            Search
          </button>
        </div>
        </div>
      </form>
*/
