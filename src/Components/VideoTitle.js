import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-16 md:pt-52 px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-5xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="px-4  md:px-10 py-1 rounded-md bg-white text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block px-10 py-2 mx-2 rounded-md bg-gray-500 text-white bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
