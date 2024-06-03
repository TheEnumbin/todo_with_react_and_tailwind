import { MouseEvent, useState } from "react";
// Used Prop Drilling to Add Task and Update Counts.

export const TotalItems = ({ number_of_tasks }) => {
  return <div className="p-4 flex">Total Tasks: {number_of_tasks}</div>;
};

export const DoneItems = ({ done_count }) => {
  return <div className="p-4 text-green-800">Completed: {done_count}</div>;
};

export const Undone = ({ undone }) => {
  return <div className="p-4 text-red-800">Pending: {undone}</div>;
};

interface CreateComponentProps {
  handleAdd: (item: string) => void;
}

export const CreateComponent = ({ handleAdd }: CreateComponentProps) => {
  const [taskname, setName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handleOnClickAdd = () => {
    if (taskname != "") {
      handleAdd(taskname);
      setName("");
    }
  };
  return (
    <div className="flex flex-row items-center justify-center py-4 border-t-2">
      <input
        className="border-zinc-400 border-[1px] h-[40px] px-[6px]"
        onChange={handleInputChange}
        value={taskname}
      ></input>
      <button
        className="bg-green-700 text-white p-2 ml-1"
        onClick={handleOnClickAdd}
      >
        Add Task
      </button>
    </div>
  );
};
