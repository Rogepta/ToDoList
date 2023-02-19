import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

export type FilterValuesType = "all" | "active" | "complited";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "Blog", isDone: true },

    { id: 2, title: "Landing", isDone: false },

    { id: 3, title: "Chat", isDone: true },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForToDoList = tasks;
  if (filter === "complited") {
    tasksForToDoList = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForToDoList = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={tasksForToDoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
