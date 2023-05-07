import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ title, description, completed, onClick }) {
  const [checked, setChecked] = useState(completed);

  function changeCheck() {
    setChecked(!checked);
  }

  return (
    <div className="shadow-md px-4 py-4 my-2 w-full lg:w-2/3">
      <input
        type="checkbox"
        name="check"
        id=""
        className="check accent-slate-700"
        style={{ transform: "scale(1.25)" }}
        onClick={changeCheck}
        checked={checked}
      />
      <label className="text-lg ml-6">{title}</label>
      <FontAwesomeIcon
        icon={faEdit}
        className="mr-auto"
        onClick={() => onClick({ title })}
      />
      <FontAwesomeIcon icon={faTrash} className="mr-auto" />
    </div>
  );
}
