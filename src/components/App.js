import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleTaskFormSubmit(task) {
    console.log(task);
    setTasks([...tasks, task]);
  }
 
  function handleCategoryClick(category) {
   setSelectedCategory(category);
  
  const filteredTasks = category === "All" 
    ? TASKS 
    : TASKS.filter((task) => task.category === category);

    setTasks(filteredTasks);
  }
  function handleDeleteTask(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  } 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks ={TASKS} tasksToDisplay={tasks} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
