import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({
  id,
  title,
  description,
  completed,
  onComplete,
  onDelete,
  openModal,
}) {
  const [checked, setChecked] = useState(completed);

  async function changeCheck() {
    onComplete(id, !checked).then((res) => {
      setChecked(!checked);
    });
  }

  const todoStyle = {
    textDecorationLine: checked ? "line-through" : "none",
  };

  return (
    <div className="flex flex-row flex-nowrap items-center shadow-md rounded px-4 py-4 my-2 w-full lg:w-2/3 dark:bg-slate-950 dark:text-slate-100">
      <div style={todoStyle} className="basis-11/12">
        <input
          type="checkbox"
          className="accent-green-700 dark:accent-green-400"
          style={{ transform: "scale(1.25)" }}
          onChange={changeCheck}
          checked={checked}
        />
        <label
          id="todo-title"
          onClick={changeCheck}
          className={`text-lg ml-6 ${
            checked ? "text-gray-500 dark:text-gray-300" : ""
          }`}
        >
          {title}
        </label>
      </div>
      <FontAwesomeIcon
        icon={faEdit}
        className="mr-auto hover:text-green-600"
        onClick={() => openModal(id)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="ml-4 hover:text-red-700"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
