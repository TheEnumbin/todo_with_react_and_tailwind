import { MouseEvent } from "react";

export const TotalItems = () => {
  return <div className="p-4 flex">Total Tasks: 10</div>;
};

export const DoneItems = () => {
  return <div className="p-4 text-green-800">Completed: 10</div>;
};

export const Undone = () => {
  return <div className="p-4 text-red-800">Pending: 5</div>;
};

export const CreateComponent = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  const handleAdd = (event: MouseEvent) => {
    console.log(event.target);
  };
  return (
    <div className="flex flex-row items-center justify-center py-4 border-t-2">
      <input
        className="border-zinc-400 border-[1px] h-[40px] px-[6px]"
        onChange={handleInputChange}
      ></input>
      <button
        className="bg-green-700 text-white p-2 ml-1"
        onClick={(e) => {
          handleAdd(e);
        }}
      >
        Add Task
      </button>
    </div>
  );
};
