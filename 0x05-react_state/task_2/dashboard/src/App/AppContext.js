import React, { createContext, useState } from "react";

// Define the default user object
const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

// Define the default logOut function
const defaultLogOut = () => {
  // Log out functionality goes here
};

// Create a React context containing user object and logOut function
export const AppContext = createContext();

// Create a provider component to wrap the app and provide the context values
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  // Log out function
  const logOut = () => {
    setUser(defaultUser);
    defaultLogOut();
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};
