import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../Utils/constants";
import { USER_ICON } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

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
  }, [dispatch, navigate]);

  return (
    <>
      <div className="absolute px-8 py-2 z-10 w-screen flex justify-between">
        <img className="w-40 " src={LOGO} alt="Netflix Logo" />
        {user && (
          <div className="flex p-2">
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
