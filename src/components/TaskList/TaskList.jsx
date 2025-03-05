import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-24"
    >
      {data.tasks.map((task) => {
        if (task.active) {
          return <AcceptTask />;
        }
        if (task.newTask) {
          return <NewTask />;
        }
        if (task.completed) {
          return <CompleteTask />;
        }
        if (task.failed) {
          return <FailedTask />;
        }
      })}
    </div>
  );
};

export default TaskList;
