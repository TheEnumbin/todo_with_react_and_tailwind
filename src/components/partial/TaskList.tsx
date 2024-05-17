import { Fragment } from "react";

interface TasklistProps {
  tasks: [];
}

export const ActionComponent = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          className="w-[25px] h-[25px] bg-blue-500"
          type="checkbox"
          name="checkbox"
          value="value"
        ></input>
        <button>Edit</button>
      </div>
    </>
  );
};

export const TaskList = ({ tasks }: TasklistProps) => {
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task, index) => (
        <tr>
          <td>{task.task_id}</td>
          <td>{task.task_name}</td>
          <td>done</td>
          <td>
            <ActionComponent></ActionComponent>
          </td>
        </tr>
      ))}
    </>
  );
};
