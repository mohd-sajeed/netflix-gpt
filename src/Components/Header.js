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
      <div className="absolute px-8 py-2 z-10 w-screen flex justify-between">
        <img className="w-40 " src={LOGO} alt="Netflix Logo" />

        {user && (
          <div className="flex p-2 items-center">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-700 text-white"
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
              className="px-4 py-2 mx-4 my-2 rounded-lg bg-purple-800 text-white"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img
              className="w-10 h-10 rounded-lg"
              src={USER_ICON}
              // src={user.photoURL}
              alt="userIcon"
            />
            <button
              className="font-bold text-white h-10 mx-2"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
