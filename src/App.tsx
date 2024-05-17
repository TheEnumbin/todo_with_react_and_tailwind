import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasks_count, setTasksCount] = useState(0);
  const addItem = (item: string) => {
    if (item != "") {
      const newTask = {
        task_id: 1,
        task_name: item,
        status: 0,
      };
      setTasks((tasks) => [...tasks, newTask]);
      setTasksCount(tasks_count + 1);
    }
  };

  return (
    <div className="to-do-wrapper bg-white">
      <Header number_of_tasks={tasks_count} handleAdd={addItem}></Header>
      <Table tasks={tasks}></Table>
    </div>
  );
}

export default App;
