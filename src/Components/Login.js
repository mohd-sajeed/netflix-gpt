import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          alt="Netflix Background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        ></img>
      </div>

      <form className=" w-1/3 absolute bg-black p-16 mt-40 mx-auto right-0 left-0 bg-opacity-85 ">
        <h1 className="font-bold text-white py-4 text-3xl ">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-2  w-full bg-customColor rounded-md text-lg "
            type="text"
            placeholder="Full Name"
          />
        )}
        
        <input
          className="p-4 my-2  w-full bg-customColor rounded-md text-lg "
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="p-4 my-2 w-full bg-customColor rounded-md text-lg "
          type="password"
          placeholder="Password"
        />
        <button className="p-2 my-6 w-full bg-red-600 text-white rounded-md cursor-pointer">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </button>
        <p
          className="py-8 text-white cursor-pointer text-lg"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? " New to Netflix? Sign up now."
            : "Already registered user? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
