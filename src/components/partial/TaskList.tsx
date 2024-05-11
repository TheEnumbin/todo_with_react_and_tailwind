import { Fragment } from "react";

interface TasklistProps {
  tasks: [];
}

const TaskList = ({ tasks }: TasklistProps) => {
  console.log(tasks);
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task, index) => (
        <tr>
          <td>{task.task_id}</td>
          <td>{task.task_name}</td>
          <td>done</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TaskList;
