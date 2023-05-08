import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ title, description, completed, onClick }) {
  const [checked, setChecked] = useState(completed);

  function changeCheck() {
    setChecked(!checked);
    const todoTitle = document.getElementById("todo-title");

    if (checked) {
      todoTitle.style.textDecoration = "linethrough";
    }
  }

  return (
    <div className="flex flex-row flex-nowrap items-center shadow-md px-4 py-4 my-2 w-full lg:w-2/3">
      <input
        type="checkbox"
        name="check"
        className="accent-slate-700"
        style={{ transform: "scale(1.25)" }}
        onChange={changeCheck}
        checked={checked}
      />
      <label
        id="todo-title"
        className="text-lg ml-6 basis-4/5 sm:basis-5/6 md:basis-11/12"
      >
        {title}
      </label>
      <FontAwesomeIcon
        icon={faEdit}
        className="mr-auto"
        onClick={() => onClick({ title, description })}
      />
      <FontAwesomeIcon icon={faTrash} className="ml-4" />
    </div>
  );
}
