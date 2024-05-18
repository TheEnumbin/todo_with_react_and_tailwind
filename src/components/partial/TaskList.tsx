import { Fragment, useState } from "react";

interface TasklistProps {
  tasks: [];
  updateCount: (checked: boolean) => void;
}

interface ActionComponentProps {
  preChecked: boolean;
  updateStatus: (checked: boolean) => void;
}

export const ActionComponent = ({
  preChecked,
  updateStatus,
}: ActionComponentProps) => {
  const [isChecked, setDone] = useState(preChecked);
  const checkHandler = (event) => {
    setDone(!isChecked);
    updateStatus(isChecked);
  };
  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          className="w-[25px] h-[25px] bg-blue-500"
          type="checkbox"
          name="checkbox"
          value="value"
          checked={isChecked}
          onChange={checkHandler}
        ></input>
        <button>Edit</button>
      </div>
    </>
  );
};

export const TaskList = ({ tasks, updateCount }: TasklistProps) => {
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task, index) => (
        <tr>
          <td>{task.task_id}</td>
          <td>{task.task_name}</td>
          <td>done</td>
          <td>
            <ActionComponent
              preChecked={task.status}
              updateStatus={updateCount}
            ></ActionComponent>
          </td>
        </tr>
      ))}
    </>
  );
};
