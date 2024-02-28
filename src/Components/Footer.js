import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black w-full bottom-0 ">
      <h1 className=" text-xl  py-6 text-white flex justify-center">
        Built and Developed by{" "}
        <span className="font-bold text-red-500 pl-2">Sajid</span>
      </h1>
      <div className="py-3 flex justify-center">
        <p className="text-white ">Follow me on Social Media :</p>
    <div className="flex text-white text-2xl">
        <a className="px-2"
          href="https://www.linkedin.com/in/mohd-sajeed-939a001bb/?originalSubdomain=in"
          rel="noreferrer"
          target="_blank"
        >
          <button >
            <AiFillLinkedin />
          </button>
        </a>
        <a
        className="px-2"
          href="https://www.instagram.com/sajid44k/"
          rel="noreferrer"
          target="_blank"
        >
          <button >
            <AiFillInstagram />
          </button>
        </a>
        <a
        className="px-2"
          href="https://github.com/mohd-sajeed"
          rel="noreferrer"
          target="_blank"
        >
          <button >
            <AiFillGithub />
          </button>
        </a>
        </div>
        </div>
    </div>
  );
};

export default Footer;
