import { Fragment } from "react";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      {tasks.length === 0 && <p className="text-center">No Item Found</p>}
      {tasks.map((task) => (
        <tr>{task}</tr>
      ))}
    </>
  );
};

export default TaskList;
