import React from "react";
import Task from "./Task";

function TaskList({ tasks, tasksToDisplay, onDelete}) {
 console.log(tasksToDisplay);
  return (
    <div className="tasks">
      {tasksToDisplay.map((task, index) => (
        <Task key={index} index={index} task={task} onDelete={onDelete}/>))
      }

    </div>
  );
}

export default TaskList;
