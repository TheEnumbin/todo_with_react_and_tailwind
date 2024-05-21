import { useState } from "react";
import { TaskList } from "./partial/TaskList";

interface TableProps {
  tasks;
  countUpdate: (checked: boolean) => void;
  updateList: (id) => void;
}
const Table = ({ tasks, countUpdate, updateList }: TableProps) => {
  let tasks_arr = ["Eat", "Code", "Sleep", "Repeat"];
  return (
    <table className="text-black border-2 w-[100%]">
      <tbody>
        <tr>
          <th className="w-[10%]">Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <TaskList
          tasks={tasks}
          updateCount={countUpdate}
          deleteHandler={(id) => updateList(id)}
        ></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
