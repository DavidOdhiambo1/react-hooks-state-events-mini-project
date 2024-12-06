import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList({ TASKS }) {
  const [tasks, setTask] = useState(TASKS);

  function handleDeleteTask(index) {
    const newTasks = tasks.filter((_, i ) => i !== index);
    setTask(newTasks);
  }
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} onDelete={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
