import { useContext } from "react";
import { TableContext } from "../../globals/AllContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ActionComponentProps {
  task_id: number;
  preChecked: boolean;
  updateStatus: (checked: boolean) => void;
}

export const ActionComponent = ({
  task_id,
  preChecked,
  updateStatus,
}: ActionComponentProps) => {
  const { tableValue, modalValue } = useContext(TableContext);
  const [tasks, setTasks] = tableValue;
  const [editId, setEditId] = modalValue;
  const checkHandler = (event, id) => {
    if (event.target.checked == true) {
      updateStatus(event.target.checked, id);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task_id === id ? { ...task, status: true } : task
        )
      );
    } else {
      updateStatus(event.target.checked, id);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task_id === id ? { ...task, status: false } : task
        )
      );
    }
  };
  const deleteClickHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?") == true) {
      try {
        const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Remove the task from the UI after successful deletion
          setTasks((prevTasks) =>
            prevTasks.filter((task) => task.task_id !== id)
          );
        } else {
          const errorText = await response.text();
          console.error(`Error deleting task: ${errorText}`);
        }
      } catch (err) {
        console.error(`Error deleting task: ${err.message}`);
      }
    }
  };
  const editClickHandler = (id) => {
    setEditId(id);
  };

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <input
          className="w-[25px] h-[25px] bg-blue-500"
          type="checkbox"
          name="checkbox"
          value="value"
          checked={preChecked}
          onChange={(event) => checkHandler(event, task_id)}
        ></input>
        <button
          className="py-[6px] px-2 rounded bg-blue-600 text-white text-[14px]"
          onClick={() => editClickHandler(task_id)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteClickHandler(task_id)}
          className="py-[6px] px-2 rounded bg-red-600 text-white text-[14px]"
        >
          Delete
        </button>
      </div>
    </>
  );
};

interface TasklistProps {
  tasks: [];
  updateStatus: (checked: boolean) => void;
}

export const TaskList = ({ tasks, updateStatus }: TasklistProps) => {
  console.log(tasks);
  return (
    <>
      {tasks.length === 0 && (
        <tr className="text-center">
          <td>No Item Found</td>
        </tr>
      )}
      {tasks.map((task, index) => (
        <SortableRow
          key={task.task_id}
          task={task}
          updateStatus={updateStatus}
        />
      ))}
    </>
  );
};

const SortableRow = ({ task, updateStatus }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.task_id });

  const style = {
    transform: CSS.Transform.toString(transform), // Apply transformations for smooth drag
    transition: transition || "transform 150ms ease", // Default animation duration
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: isDragging ? "#e0f7fa" : "#f9f9f9", // Change color while dragging
    marginBottom: "10px",
    cursor: "grab",
    opacity: isDragging ? 0.8 : 1, // Add opacity effect while dragging
    boxShadow: isDragging ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none", // Add shadow while dragging
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={task.status ? "completed" : ""}
    >
      <td>{task.task_id}</td>
      <td>{task.task_name}</td>
      <td>{task.status ? "Completed" : "Pending"}</td>
      <td>{task.position}</td>
      <td>
        <ActionComponent
          task_id={task.task_id}
          preChecked={task.status}
          updateStatus={updateStatus}
        ></ActionComponent>
      </td>
    </tr>
  );
};
