import TaskList from "./partial/TaskList";

const Table = () => {
  let tasks_arr = ["Eat", "Code", "Sleep", "Repeat"];
  let tasks = [
    {
      task_id: 1,
      task_name: "Eat",
      status: 1,
    },
    {
      task_id: 2,
      task_name: "Code",
      status: 1,
    },
    {
      task_id: 3,
      task_name: "Sleep",
      status: 1,
    },
    {
      task_id: 4,
      task_name: "Repeat",
      status: 1,
    },
  ];
  return (
    <table className="text-black border-2 w-[100%]">
      <tbody>
        <tr>
          <th className="w-[10%]">Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <TaskList tasks={tasks}></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
