import TaskList from "./partial/TaskList";

interface TableProps {
  newItem: string;
}

const Table = ({ newItem }: TableProps) => {
  let tasks_arr = ["Eat", "Code", "Sleep", "Repeat"];

  let tasks = [];

  if (newItem != "") {
    tasks = [
      {
        task_id: 1,
        task_name: newItem,
        status: 0,
      },
    ];
  }
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
