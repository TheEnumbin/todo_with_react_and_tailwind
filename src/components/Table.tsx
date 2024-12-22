import { useState } from "react";
import { TaskList } from "./partial/TaskList";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
interface TableProps {
  tasks;
  updateStatus: (checked: boolean) => void;
}
const Table = ({ tasks, updateStatus }: TableProps) => {
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
        <DndContext>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <TaskList tasks={tasks} updateStatus={updateStatus}></TaskList>
          </SortableContext>
        </DndContext>
      </tbody>
    </table>
  );
};

export default Table;
