import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState("");
  const [userLoggedInData, setUserLoggedInData] = useState("");
  const authData = useContext(AuthContext)
  
  // check who is logged admin or employee 
  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // },[authData])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser");

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setUserLoggedInData(userData.role);
    }
  },[])

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee"); // Fixed role name
        setUserLoggedInData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={userLoggedInData}/> : null)}
    </>
  );
};

export default App;
