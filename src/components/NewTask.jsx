import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enterTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if(enterTask.trim() === '') {
      return;
    }
    onAdd(enterTask)
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w064 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enterTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
