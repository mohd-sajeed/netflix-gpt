import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGUES } from "../Utils/constants";
import { USER_ICON } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.gptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    // console.log(e.target.value)
  };
  return (
    <>
      <div className=" py-2 absolute px-8 z-10 w-screen flex flex-col justify-between md:flex-row bg-gradient-to-b from-black">
        
          <img
            className=" w-44 mx-auto md:mx-0 "
            src={LOGO}
            alt="Netflix Logo"
          />
        

        {user && (
          <div className=" flex  md:p-2 items-center justify-between ">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-700 text-white rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGUES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className=" px-2 md:px-4 py-2 mx-2 md:mx-4 my-2 rounded-lg bg-purple-800 text-white "
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            <img
              className="w-10 h-10 rounded-lg hidden md:block "
              src={USER_ICON}
              // src={user.photoURL}
              alt="userIcon"
            />

            <button
              className=" text-white h-10 mx-1 md:mx-2 bg-gray-700 rounded-lg px-2 md:px-4 text-sm md:text-md"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
