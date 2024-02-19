import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // signUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/3 absolute bg-black p-16 mt-40 mx-auto right-0 left-0 bg-opacity-85 text-white"
      >
        <h1 className="font-bold text-white py-4 text-3xl ">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2  w-full bg-customColor rounded-md text-lg "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="p-4 my-2  w-full bg-customColor rounded-md text-lg "
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full bg-customColor rounded-md text-lg "
          type="password"
          placeholder="Password"
        />
        <p className="text-lg text-red-500 py-2">{errorMessage}</p>
        <button
          className="p-2 my-6 w-full bg-red-600 text-white rounded-md cursor-pointer"
          onClick={handleButtonClick}
        >
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
