import "./css/modal.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Modal({
  isOpen,
  closeModal,
  onAdd,
  onUpdate,
  id,
  title,
  description,
}) {
  const [titleValue, setTitleValue] = useState("");
  const [desc, setDesc] = useState("");

  const overlayStyle = {
    display: isOpen ? "flex" : "none",
  };

  useEffect(() => {
    if (id) {
      setTitleValue(title);
      setDesc(description);
    } else {
      setTitleValue("");
      setDesc("");
    }
  }, [id, title, description]);

  function handleSave() {
    if (!titleValue) {
      alert("Please add a title");
      return;
    }
    if (id) {
      onUpdate({ id, title: titleValue, description: desc });
    } else {
      onAdd({ id, title: titleValue, description: desc });
    }

    closeModal();
  }

  return (
    <div className="overlay" style={overlayStyle}>
      <div className="modal p-6 w-3/4 sm:w-3/5 lg:w-2/5 rounded-md">
        <div className="flex flex-row flex-nowrap justify-between mb-2">
          <p className="text-2xl">{id ? "Update" : "Add"} Task</p>
          <button type="button" onClick={closeModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <hr />
        <input
          type="text"
          className="p-2 w-full mt-10 border rounded dark:bg-slate-950 dark:border-none"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          placeholder="Add title"
        />
        <textarea
          rows="5"
          className="p-2 mt-4 w-full border rounded resize-none dark:bg-slate-950 dark:border-none"
          placeholder="Add description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <div className="text-right mt-10">
          <button
            type="button"
            className="btn bg-gray-300 hover:bg-gray-400 text-black dark:bg-gray-50"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn bg-green-950 hover:bg-green-800 text-white dark:bg-green-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
