import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-52 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-5xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4">{overview}</p>
      <div>
        <button className=" px-10 py-2 rounded-md bg-white text-black hover:bg-opacity-80">
          Play
        </button>
        <button className=" px-10 py-2 mx-2 rounded-md bg-gray-500 text-white bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
