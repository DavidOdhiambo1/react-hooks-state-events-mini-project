import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete}) {
 console.log(tasks);
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} index={index} text={task.text} category={task.category} onDelete={onDelete}/>))
      }

    </div>
  );
}

export default TaskList;
