import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebaseConfig"; // Your firebase config path
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the context
const AuthContext = createContext({});

// Create a hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginState = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setCurrentUser(JSON.parse(user));
        setLoading(false);
      } else {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user) {
            await AsyncStorage.setItem("user", JSON.stringify(user));
            setCurrentUser(user);
          } else {
            await AsyncStorage.removeItem("user");
            setCurrentUser(null);
          }
          setLoading(false);
        });
        return unsubscribe; // Unsubscribe from the listener when unmounting
      }
    };
    checkLoginState();
  }, []);

  // Log out function
  const logOut = async () => {
    await auth.signOut();
    await AsyncStorage.removeItem("user");
    setCurrentUser(null);
  };

  // The value provided to the context consumers
  const value = {
    currentUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={{ currentUser, logOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
