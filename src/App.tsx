import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import EditModal from "./components/Modal";
import { TableContext } from "./globals/AllContext";
import Table from "./components/Table";
import "./App.css";
import "./style.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

function App() {
  // Default/Demo Task Array

  let pre_tasks = [
    {
      task_id: 1,
      task_name: "Task 1",
      status: false,
      position: 1,
    },
    {
      task_id: 2,
      task_name: "Task 2",
      status: false,
      position: 2,
    },
    {
      task_id: 3,
      task_name: "Task 3",
      status: false,
      position: 3,
    },
  ];

  // Setting up all the state variables
  const [tasks, setTasks] = useState();
  const [newId, setNewId] = useState(tasks.length + 1);
  const [tasks_count, setTasksCount] = useState(tasks.length);
  const [done_count, setDoneCount] = useState(0);
  const [undone, setPendingCount] = useState(tasks_count - done_count);
  const [editId, setEditId] = useState(0);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasksCount(data.length);
        setDoneCount(data.filter((obj) => obj.status === 1).length);
        setPendingCount(data.filter((obj) => obj.status === 0).length);
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
        status: 0,
      };
      /*
       * setTask is a useState hook call back
       * Here we have us a function update form of the call back function.
       * When used functional update form of the useState callback,
       * The parameters stores the previous value of the state.
       * Here prevTasks stores the previous state of the task list and then append the new task to it
       * with the spread operator.
       */
      fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error adding task:", error));
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
  const updateStatus = async (checked: boolean, id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: checked }),
      });

      if (response.ok) {
        // Update the task in the state after successful status update
        if (checked == true) {
          setDoneCount((prevDone) => prevDone + 1);
          setPendingCount((prevPending) => prevPending - 1);
        } else {
          setDoneCount((prevDone) => prevDone - 1);
          setPendingCount((prevPending) => prevPending + 1);
        }
      } else {
        const errorText = await response.text();
        console.error(`Error updating task: ${errorText}`);
      }
    } catch (err) {
      console.error(`Error updating task: ${err.message}`);
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

  const updateTaskPositions = async (updatedTasks) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/tasks/updatePositions",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tasks: updatedTasks }), // Send the updated tasks array
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Task positions updated successfully:", data);
      } else {
        const errorText = await response.text();
        console.error(`Error updating task positions: ${errorText}`);
      }
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active);
    console.log(over);
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.task_id === active.id);
      const newIndex = tasks.findIndex((task) => task.task_id === over.id);

      const updatedTasks = arrayMove(tasks, oldIndex, newIndex).map(
        (task, index) => ({
          ...task,
          position: index + 1,
        })
      );

      setTasks(updatedTasks);
      updateTaskPositions(updatedTasks);
    }
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
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          <TableContext.Provider value={contextValue}>
            {/* Here only the context is wrapped around the table since context change will re render the table */}
            <Table tasks={filteredTasks} updateStatus={updateStatus}></Table>
            <EditModal></EditModal>
          </TableContext.Provider>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
