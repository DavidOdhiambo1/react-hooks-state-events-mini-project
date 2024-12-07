import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(task) {
    console.log(task);
    TASKS.push(task);
    console.log(TASKS);
  }
 

  function handleCategoryClick(category) {
    
   setSelectedCategory(category);

  }
  const filteredTasks = selectedCategory === "All" 
    ? TASKS 
    : TASKS.filter((task) => task.category === selectedCategory);
  console.log(filteredTasks);

  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} onCategoryClick={handleCategoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList TASKS={TASKS} tasksToDisplay={filteredTasks}/>
    </div>
  );
}

export default App;
