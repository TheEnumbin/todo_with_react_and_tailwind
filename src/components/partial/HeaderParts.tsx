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
  return (
    <div className="flex flex-row items-center justify-center py-4 border-t-2">
      <input className="border-zinc-400 border-[1px] h-[40px] px-[6px]"></input>
      <button className="bg-green-700 text-white p-2 ml-1">Add Task</button>
    </div>
  );
};
