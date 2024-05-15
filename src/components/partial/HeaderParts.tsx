import { MouseEvent, useState } from "react";

export const TotalItems = () => {
  return <div className="p-4 flex">Total Tasks: 10</div>;
};

export const DoneItems = () => {
  return <div className="p-4 text-green-800">Completed: 10</div>;
};

export const Undone = () => {
  return <div className="p-4 text-red-800">Pending: 5</div>;
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
