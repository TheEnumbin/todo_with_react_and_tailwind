import { Fragment, useState, useContext } from "react";
import { TableContext } from "../../globals/AllContext";

interface ActionComponentProps {
  task_id: number;
  preChecked: boolean;
  updateStatus: (checked: boolean) => void;
}

export const ActionComponent = ({
  task_id,
  preChecked,
  updateStatus,
}: ActionComponentProps) => {
  const { tableValue, modalValue } = useContext(TableContext);
  const [tasks, setTasks] = tableValue;
  const [editId, setEditId] = modalValue;
  const checkHandler = (event, id) => {
    if (event.target.checked == true) {
      updateStatus(event.target.checked);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task_id === id ? { ...task, status: true } : task
        )
      );
    } else {
      updateStatus(event.target.checked);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task_id === id ? { ...task, status: false } : task
        )
      );
    }
  };
  const deleteClickHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this item?") == true) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== id));
    }
  };
  const editClickHandler = (id) => {
    setEditId(id);
  };

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <input
          className="w-[25px] h-[25px] bg-blue-500"
          type="checkbox"
          name="checkbox"
          value="value"
          checked={preChecked}
          onChange={(event) => checkHandler(event, task_id)}
        ></input>
        <button
          className="py-[6px] px-2 rounded bg-blue-600 text-white text-[14px]"
          onClick={() => editClickHandler(task_id)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteClickHandler(task_id)}
          className="py-[6px] px-2 rounded bg-red-600 text-white text-[14px]"
        >
          Delete
        </button>
      </div>
    </>
  );
};

interface TasklistProps {
  tasks: [];
  countUpdate: (checked: boolean) => void;
}

export const TaskList = ({ tasks, countUpdate }: TasklistProps) => {
  console.log(tasks);
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task, index) => (
        <tr key={index} className={task.status ? "completed" : ""}>
          <td>{task.task_id}</td>
          <td>{task.task_name}</td>
          <td>done</td>
          <td>
            <ActionComponent
              task_id={task.task_id}
              preChecked={task.status}
              updateStatus={countUpdate}
            ></ActionComponent>
          </td>
        </tr>
      ))}
    </>
  );
};
