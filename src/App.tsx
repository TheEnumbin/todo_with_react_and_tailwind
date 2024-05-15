import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  const [tasks, appendTask] = useState([]);
  const addItem = (item: string) => {
    if (item != "") {
      const newTask = {
        task_id: 1,
        task_name: item,
        status: 0,
      };
      appendTask((prevTasks) => [...prevTasks, newTask]);
    }

    console.log(tasks);
  };

  return (
    <div className="to-do-wrapper bg-white">
      <Header handleAdd={addItem}></Header>
      <Table tasks={tasks}></Table>
    </div>
  );
}

export default App;
