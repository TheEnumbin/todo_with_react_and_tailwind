import { Fragment, useState } from "react";

interface ActionComponentProps {
  preChecked: boolean;
  updateStatus: (checked: boolean) => void;
  removeItem: () => void;
}

export const ActionComponent = ({
  preChecked,
  updateStatus,
  removeItem,
}: ActionComponentProps) => {
  const [isChecked, setDone] = useState(preChecked);

  const checkHandler = (event) => {
    if (event.target.checked == true) {
      setDone(event.target.checked);
      updateStatus(event.target.checked);
    } else {
      setDone(event.target.checked);
      updateStatus(event.target.checked);
    }
  };
  const deleteClickHandler = () => {
    if (window.confirm("Are you sure you want to delete this item?") == true) {
      removeItem();
    }
  };
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <input
          className="w-[25px] h-[25px] bg-blue-500"
          type="checkbox"
          name="checkbox"
          value="value"
          checked={isChecked}
          onChange={checkHandler}
        ></input>
        <button className="py-[6px] px-2 rounded bg-blue-600 text-white text-[14px]">
          Edit
        </button>
        <button
          onClick={deleteClickHandler}
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
  updateCount: (checked: boolean) => void;
  deleteHandler: () => void;
}

export const TaskList = ({
  tasks,
  updateCount,
  deleteHandler,
}: TasklistProps) => {
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task, index) => (
        <tr key={index}>
          <td>{task.task_id}</td>
          <td>{task.task_name}</td>
          <td>done</td>
          <td>
            <ActionComponent
              preChecked={task.status}
              updateStatus={updateCount}
              removeItem={deleteHandler}
            ></ActionComponent>
          </td>
        </tr>
      ))}
    </>
  );
};
