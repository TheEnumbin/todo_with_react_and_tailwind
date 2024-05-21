import { useState } from "react";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasks_count, setTasksCount] = useState(0);
  const [done_count, setDoneCount] = useState(0);
  const [undone, setPendingCount] = useState(tasks_count - done_count);
  const addItem = (item: string) => {
    if (item != "") {
      const newTask = {
        task_id: 1,
        task_name: item,
        status: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTasksCount(tasks_count + 1);
      setPendingCount(undone + 1);
    }
  };
  const updateTask = (checked: boolean) => {
    console.log(checked);

    if (checked == true) {
      setDoneCount((prevDone) => prevDone + 1);
      setPendingCount((prevPending) => prevPending - 1);
    } else {
      setDoneCount((prevDone) => prevDone - 1);
      setPendingCount((prevPending) => prevPending + 1);
    }
  };

  const updateTaskList = (id) => {
    console.log("deleting : " + id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== id));
  };
  return (
    <div className="to-do-wrapper bg-white">
      <Header
        number_of_tasks={tasks_count}
        done_count={done_count}
        undone={undone}
        handleAdd={addItem}
      ></Header>
      <Table
        tasks={tasks}
        countUpdate={updateTask}
        updateList={(id) => updateTaskList(id)}
      ></Table>
    </div>
  );
}

export default App;
