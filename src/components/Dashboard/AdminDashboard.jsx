import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask.jsx";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header/>
      <CreateTask/>
      <AllTaskList/>
    </div>
  );
};

export default AdminDashboard;
