import TaskList from "./partial/TaskList";

const Table = () => {
  let tasks_arr = [];
  return (
    <table className="text-black border-2 w-[100%]">
      <tbody>
        <tr>
          <th className="w-[10%]">Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <TaskList tasks={tasks_arr}></TaskList>
      </tbody>
    </table>
  );
};

export default Table;
