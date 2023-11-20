"use client";
import { useState, useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function taskReducer(tasks: any, action: any) {
  switch (action.type) {
    case "add":
      return [...tasks, { id: nextId++, text: action.text, done: false }];
    case "edit":
      return tasks.map((item: any) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    case "delete":
      return tasks.filter((task: any) => task.id !== action.id);
  }
}
export default function Todo() {
  //   const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  console.log(tasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "add",
      text: text,
    });
  }
  function handleEdit(task: any) {
    dispatch({
      type: "edit",
      task: task,
    });
  }
  function handleDelete(taskId: number) {
    dispatch({
      type: "delete",
      id: taskId,
    });
  }
  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
