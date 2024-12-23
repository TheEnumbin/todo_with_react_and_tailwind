import { useState } from "react";
import { TaskList } from "./partial/TaskList";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
interface TableProps {
  tasks;
  updateStatus: (checked: boolean) => void;
}
const Table = ({ tasks, updateStatus }: TableProps) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <TaskList tasks={tasks} updateStatus={updateStatus}></TaskList>
          </SortableContext>
        </DndContext>
      </tbody>
    </table>
  );
};

export default Table;
