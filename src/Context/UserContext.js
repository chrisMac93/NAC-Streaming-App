// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [profiles, setProfiles] = useState([
    // Define your profiles here
    { id: "1", name: "Mom", image: require("../../assets/UserProfilePics/1.png") },
    { id: "2", name: "Dad", image: require("../../assets/UserProfilePics/2.png") },
    {
      id: "3",
      name: "Bobby",
      image: require("../../assets/UserProfilePics/3.png"),
    },
    {
      id: "4",
      name: "Johnny",
      image: require("../../assets/UserProfilePics/4.png"),
    },
    {
      id: "5",
      name: "Sarah",
      image: require("../../assets/UserProfilePics/5.png"),
    },
  ]);

  const clearCurrentUser = () => {
    // Reset the current user state
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, clearCurrentUser, profiles, setProfiles }}>
      {children}
    </UserContext.Provider>
  );
};
