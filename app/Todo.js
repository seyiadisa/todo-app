import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  return (
    <div className="shadow-md px-4 py-4 my-2 w-full lg:w-2/3">
      <input
        type="checkbox"
        name="check"
        id=""
        className="check accent-slate-700"
        style={{ transform: "scale(1.25)" }}
      />
      <label className="text-lg ml-6">Take out the trash</label>
      <FontAwesomeIcon icon={faTrash} className="mr-auto" />
    </div>
  );
}
