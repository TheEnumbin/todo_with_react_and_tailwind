import { useState } from "react";
import { TaskList } from "./partial/TaskList";

interface TableProps {
  tasks;
  countUpdate: (checked: boolean) => void;
}
const Table = ({ tasks, countUpdate }: TableProps) => {
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
        <TaskList tasks={tasks} countUpdate={countUpdate}></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
