import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center md:hidden w-full shadow-md px-6 py-4">
      <FontAwesomeIcon icon={faBars} className="h-6" />
      <p className="inline text-2xl ml-5">Back</p>
    </nav>
  );
}
