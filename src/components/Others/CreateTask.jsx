import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="p-5 mt-3 rounded">
        <form class="w-full mx-auto p-4 bg-[#1c1c1c] rounded-2xl shadow-md">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">Create Task</h2>

          <div class="flex gap-5 space-x-6">
            <div class="w-1/2 space-y-4">
              <div>
                <label class="block text-gray-600 font-medium">
                  Task Title
                </label>
                <input
                  type="text"
                  class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label class="block text-gray-600 font-medium">Date</label>
                <input
                  type="date"
                  class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                />
              </div>

              <div>
                <label class="block text-gray-600 font-medium">Assign to</label>
                <input
                  type="text"
                  class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Employee name"
                />
              </div>

              <div>
                <label class="block text-gray-600 font-medium">Category</label>
                <input
                  type="text"
                  class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Design, Dev, Marketing, etc."
                />
              </div>
            </div>

            <div class="w-1/2">
              <label class="block text-gray-600 font-medium">Description</label>
              <textarea
                class="h-55 w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                rows="6"
                placeholder="Enter task details"
              ></textarea>
              <button
                type="submit"
                class="w-40 cursor-pointer bg-blue-600 text-white py-2 mt-10 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
