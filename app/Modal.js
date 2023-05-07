import "./css/modal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Modal() {
  const closeModal = function () {
    const modal = document.getElementsByClassName("overlay")[0];
    modal.style.display = "none";
  };
  return (
    <div className="overlay">
      <div className="modal p-4 w-3/4 sm:w-3/5 lg:w-2/5">
        <div className="flex flex-row flex-nowrap justify-between mb-2">
          <p className="text-xl">Add Task</p>
          <button type="button" onClick={closeModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <hr />
        <div className="flex flex-row flex-nowrap justify-between mt-10 items-center">
          <input type="text" className="px-2 py-2 w-4/5" />
          <FontAwesomeIcon icon={faEdit} style={{ transform: "scale(1.25)" }} />
        </div>
        <div className="text-right mt-10">
          <button
            type="button"
            className="btn bg-gray-300 text-black"
            onClick={closeModal}
          >
            Close
          </button>
          <button type="button" className="btn bg-slate-700 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
