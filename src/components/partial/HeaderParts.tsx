import { MouseEvent, useState } from "react";

export const TotalItems = ({ tItems }) => {
  return <div className="p-4 flex">Total Tasks: {tItems}</div>;
};

export const DoneItems = ({ dItems }) => {
  return <div className="p-4 text-green-800">Completed: {dItems}</div>;
};

export const Undone = ({ undone }) => {
  return <div className="p-4 text-red-800">Pending: {undone}</div>;
};

interface CreateComponentProps {
  onClickAdd: (item: string) => void;
}

export const CreateComponent = ({ onClickAdd }: CreateComponentProps) => {
  const [taskname, setName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handleOnClickAdd = () => {
    if (taskname != "") {
      onClickAdd(taskname);
      setName("");
    }
  };
  return (
    <div className="flex flex-row items-center justify-center py-4 border-t-2">
      <input
        className="border-zinc-400 border-[1px] h-[40px] px-[6px]"
        onChange={handleInputChange}
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
