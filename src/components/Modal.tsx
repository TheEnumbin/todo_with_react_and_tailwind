import { ReactNode, useContext, useState } from "react";
import { TableContext } from "../globals/AllContext";

const EditModal = () => {
  const { tableValue, modalValue } = useContext(TableContext);
  const [tasks, setTasks] = tableValue;
  const [editId, setEditId] = modalValue;
  const [editedName, setEditedName] = useState("");
  const handleInputChange = (value) => {
    setEditedName(value);
  };
  const updateTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.task_id === editId ? { ...task, task_name: editedName } : task
      )
    );
    setEditId(0);
  };

  if (editId == 0) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Enter your task</h2>
        <input
          type="text"
          onChange={(e) => handleInputChange(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={() => {
              setEditId(0);
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={updateTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
