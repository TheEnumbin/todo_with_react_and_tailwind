import { Fragment } from "react";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((item) => (
        <tr>{item}</tr>
      ))}
    </>
  );
};

export default TaskList;
