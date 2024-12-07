import React, { useState } from "react";
import Task from "./Task";

function TaskList({ TASKS, tasksToDisplay }) {
 const [tasks, setTasks] = useState(TASKS);
 let runDelete = true
  
  function handleDeleteTask(index) {
    
    console.log('clicked')
    const newTasks = tasks.filter((_, i ) => i !== index);
    
    setTasks(newTasks);
    runDelete= false
  }
  console.log(runDelete)
  return (
    <div className="tasks">
      {runDelete ? tasksToDisplay.map((task, index) => (
  <Task key={index} index={index} task={task} onDelete={handleDeleteTask}/>
)) : tasks.map((task, index) => (
  <Task key={index} index={index} task={task} onDelete={handleDeleteTask}/>
))}
    </div>
  );
}

export default TaskList;
