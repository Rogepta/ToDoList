import React, { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

export type FilterValuesType = "all" | "active" | "complited";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "Blog", isDone: true },

    { id: v1(), title: "Landing", isDone: false },

    { id: v1(), title: "Chat", isDone: true },

    { id: v1(), title: "Resume", isDone: false },

    { id: v1(), title: "Pet Project", isDone: false },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
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
        addTask={addTask}
      />
    </div>
  );
}

export default App;
