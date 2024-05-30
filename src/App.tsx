import { useEffect, useState } from "react";
import Header from "./components/Header";
import Alert from "./components/Alert";
import { TableContext } from "./globals/AllContext";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  let pre_tasks = [
    {
      task_id: 1,
      task_name: "Task 1",
      status: false,
    },
    {
      task_id: 2,
      task_name: "Task 2",
      status: false,
    },
    {
      task_id: 3,
      task_name: "Task 3",
      status: false,
    },
  ];
  const [tasks, setTasks] = useState(pre_tasks);
  const [tasks_count, setTasksCount] = useState(tasks.length);
  const [newId, setNewId] = useState(tasks.length + 1);
  const [done_count, setDoneCount] = useState(0);
  const [undone, setPendingCount] = useState(tasks_count - done_count);
  const addItem = (item: string) => {
    if (item != "") {
      const newTask = {
        task_id: newId,
        task_name: item,
        status: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTasksCount(tasks_count + 1);
      setPendingCount(undone + 1);
      setNewId(newId + 1);
    }
  };
  const updateTask = (checked: boolean) => {
    if (checked == true) {
      setDoneCount((prevDone) => prevDone + 1);
      setPendingCount((prevPending) => prevPending - 1);
    } else {
      setDoneCount((prevDone) => prevDone - 1);
      setPendingCount((prevPending) => prevPending + 1);
    }
  };
  useEffect(() => {
    if (tasks.length == 0) {
      setDoneCount(0);
      setTasksCount(0);
      setPendingCount(0);
      setNewId(1);
    }
  }, [tasks]);

  return (
    <div className="to-do-wrapper bg-white">
      <Header
        // Prop drilling from Parent "App" to Child "Header" with the Props
        number_of_tasks={tasks_count}
        done_count={done_count}
        undone={undone}
        handleAdd={addItem}
      ></Header>
      <TableContext.Provider value={{ tasks, setTasks }}>
        {/* Here only the context is wrapped around the table since context change will re render the table */}
        <Table tasks={tasks} countUpdate={updateTask}></Table>
      </TableContext.Provider>
    </div>
  );
}

export default App;
