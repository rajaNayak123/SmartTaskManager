import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState("");
  const authData = useContext(AuthContext)
  
  // check who is logged admin or employee 
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
    }
  },[authData])

  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)) {
      setUser('employees')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    }else{
      alert("invalid credentials")
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
