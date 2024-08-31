import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import EditModal from "./components/Modal";
import { TableContext } from "./globals/AllContext";
import Table from "./components/Table";
import "./App.css";
import "./style.css";

function App() {
  // Default/Demo Task Array

  console.log();
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

  // Setting up all the state variables
  const [tasks, setTasks] = useState([]);
  const [newId, setNewId] = useState(tasks.length + 1);
  const [tasks_count, setTasksCount] = useState(tasks.length);
  const [done_count, setDoneCount] = useState(0);
  const [undone, setPendingCount] = useState(tasks_count - done_count);
  const [editId, setEditId] = useState(0);
  const [searchQ, setSearchQ] = useState("");
  console.log(pre_tasks);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  /*
   * Prop drilled function to add task to the task list.
   * This function is called when add button is called from HeaderPart Component
   * via handleAdd prop method of the Header Component.
   */
  const addItem = (item: string) => {
    if (item != "") {
      const newTask = {
        task_id: newId,
        task_name: item,
        status: false,
      };

      /*
       * setTask is a useState hook call back
       * Here we have us a function update form of the call back function.
       * When used functional update form of the useState callback,
       * The parameters stores the previous value of the state.
       * Here prevTasks stores the previous state of the task list and then append the new task to it
       * with the spread operator.
       */
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTasksCount(tasks_count + 1);
      setPendingCount(undone + 1);
      setNewId(newId + 1);
    }
  };

  /*
   * Since we have used prop drilling in the header part of the project,
   * Here we have kept prop drilling to update the done and pending task count.
   * This function is called from ActionComponent by drilling updateTask as prop.
   */
  const updateTask = (checked: boolean) => {
    if (checked == true) {
      setDoneCount((prevDone) => prevDone + 1);
      setPendingCount((prevPending) => prevPending - 1);
    } else {
      setDoneCount((prevDone) => prevDone - 1);
      setPendingCount((prevPending) => prevPending + 1);
    }
  };

  /*
   * useEffect hook is used here to set all the count to zero when someone has deelted all the tasks from the list.
   * The dependecy array is set to [tasks] which is why it runs whenever the task array changes.
   * And set the header counter to zero when task length is zero.
   */
  useEffect(() => {
    if (tasks.length == 0) {
      setDoneCount(0);
      setTasksCount(0);
      setPendingCount(0);
      setNewId(1);
    }
  }, [tasks]);

  /*
   * This is another useEffect hook to run only on the init of the project.
   * This is only for learning.
   * It sets the the editId to zero so that the edit modal stay closed.
   */
  useEffect(() => {
    setEditId(0);
  }, []);

  const allTasks = useMemo(() => tasks, [tasks]);

  const runSearch = (q: string) => {
    setSearchQ(q);
  };
  const filteredTasks = useMemo(() => {
    return allTasks.filter((task) =>
      task.task_name.toLowerCase().includes(searchQ.toLowerCase())
    );
  }, [searchQ, allTasks]);
  /**
   * Set up context object here to send multiple object as context.
   * Need tasks for task Table component and editId to edit tasks from modal component.
   * So send them as an object with key value pair.
   */
  const contextValue = {
    tableValue: [filteredTasks, setTasks],
    modalValue: [editId, setEditId],
  };
  return (
    <div className="to-do-wrapper bg-white">
      <Header
        // Prop drilling from Parent "App" to Child "Header" with the Props
        number_of_tasks={tasks_count}
        done_count={done_count}
        undone={undone}
        handleAdd={addItem}
        runSearch={runSearch}
      ></Header>
      <TableContext.Provider value={contextValue}>
        {/* Here only the context is wrapped around the table since context change will re render the table */}
        <Table tasks={filteredTasks} countUpdate={updateTask}></Table>
        <EditModal></EditModal>
      </TableContext.Provider>
    </div>
  );
}

export default App;
