import { useState } from "react";
import TaskList from "./partial/TaskList";

const Table = ({ tasks }) => {
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
        <TaskList tasks={tasks}></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
