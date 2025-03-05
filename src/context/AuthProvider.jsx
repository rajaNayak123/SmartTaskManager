import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage.jsx";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    setLocalStorage(); 
  
    const data = getLocalStorage() || {}; 
    const { employees, admin } = data; 
  
    setUserData({ employees, admin });
  
    // console.log("Check the data:", employees, admin);
  }, []);
 

  return <AuthContext.Provider value={userData}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
