"use client";

import { useState } from "react";

export default function AddTask({ onAddTask }: any) {
  const [text, setText] = useState("");
  return (
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     onAddTask(text);
    //   }}
    // >
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => onAddTask(text)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </>

    // </form>
  );
}
