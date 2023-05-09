import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({
  id,
  title,
  description,
  completed,
  onDelete,
  openModal,
}) {
  const [checked, setChecked] = useState(completed);

  function changeCheck() {
    setChecked(!checked);
  }

  const todoStyle = {
    textDecorationLine: checked ? "line-through" : "none",
    color: checked ? "rgba(0,0,0,0.5)" : "inherit",
  };

  return (
    <div className="flex flex-row flex-nowrap items-center shadow-md px-4 py-4 my-2 w-full lg:w-2/3">
      <div style={todoStyle} className="basis-11/12">
        <input
          type="checkbox"
          name="check"
          className="check accent-slate-700"
          style={{ transform: "scale(1.25)" }}
          onChange={changeCheck}
          checked={checked}
        />
        <label id="todo-title" onClick={changeCheck} className="text-lg ml-6">
          {title}
        </label>
      </div>
      <FontAwesomeIcon
        icon={faEdit}
        className="mr-auto"
        onClick={() => openModal({ id, title, description })}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="ml-4"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
