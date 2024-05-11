import TaskList from "./partial/TaskList";

const Table = () => {
  let tasks = ["Eat", "Code", "Sleep", "Repeat"];
  // let tasks = "task";
  console.log(typeof tasks);
  return (
    <table className="text-black border-2 w-[100%]">
      <tbody>
        <tr>
          <th className="w-[10%]">Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <TaskList items={tasks}></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
