import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-amber-400 p-6 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-400 text-sm px-3 py-1 rounded">
          {data.category}
        </h2>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-5">{data.description}</p>
      <div className="mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm cursor-pointer rounded">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
