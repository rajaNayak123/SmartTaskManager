import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
const AllTaskList = () => {
  const authData = useContext(AuthContext);
  console.log("this is auth data", authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-3 h-50">
      <div className="bg-red-400 py-2 px-4 mb-4 flex justify-between rounded">
        <h2 className="w-1/5 font-medium text-lg bg-red-500">Employee Name</h2>
        <h3 className="w-1/5 font-medium text-lg bg-red-500">New Task</h3>
        <h5 className="w-1/5 font-medium text-lg bg-red-500">Active Task</h5>
        <h5 className="w-1/5 font-medium text-lg bg-red-500">Completed</h5>
        <h5 className="w-1/5 font-medium text-lg bg-red-500">Failed</h5>
      </div>

      <div className="overflow-auto h-[80%]">
        {authData.employees.map((tl) => {
          return (
            <div className="bg-red-400 py-2 px-4 mb-4 flex justify-between rounded">
              <h2 className="font-medium text-lg w-1/5 bg-transparent ">{tl.firstName}</h2>
              <h3 className="font-medium text-lg w-1/5 bg-red-500">{tl.taskNumbers.newTask}</h3>
              <h5 className="font-medium text-lg w-1/5 bg-red-500">{tl.taskNumbers.active}</h5>
              <h5 className="font-medium text-lg w-1/5 bg-red-500">{tl.taskNumbers.completed}</h5>
              <h5 className="font-medium text-lg w-1/5 bg-red-500">{tl.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTaskList;
