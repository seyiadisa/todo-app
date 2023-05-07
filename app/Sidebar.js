import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar hidden md:block fixed w-1/4 px-6 py-6 h-full top-0 left-0 bg-slate-700 text-white">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl">Todo List</p>
        <FontAwesomeIcon
          icon={faBars}
          className=""
          style={{ transform: "scale(1.25)" }}
        />
      </div>
    </div>
  );
}
