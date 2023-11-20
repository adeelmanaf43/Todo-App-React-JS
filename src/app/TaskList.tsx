"use client";
import { useState } from "react";

export default function TaskList({ tasks, onEdit, onDelete }: any) {
  return (
    <div>
      {tasks.map((item: any) => (
        <li key={item.id}>
          <Task task={item} onEditTask={onEdit} onDeleteTask={onDelete} />
        </li>
      ))}
    </div>
  );
}

function Task({ task, onEditTask, onDeleteTask }: any) {
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => onEditTask({ ...task, text: e.target.value })}
          type="text"
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        checked={task.done}
        onChange={(e) => onEditTask({ ...task, done: e.target.checked })}
        type="checkbox"
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  );
}
