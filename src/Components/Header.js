import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex justify-between">
        <img
          className="w-52 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        { user && <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6PCrEK1QxHMTjNCL-KYLVtXodbOP6dYG5lSSQ-YJGQ&s"
            // src={user.photoURL}
            alt="userIcon"
          />
          <button
            className="font-bold text-white h-12 mx-2"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>}
      </div>
    </>
  );
};

export default Header;
