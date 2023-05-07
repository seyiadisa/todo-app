"use client";

import Todo from "./Todo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const date = new Date(Date());
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const showModal = function () {
    const modal = document.getElementsByClassName("overlay")[0];
    modal.style.display = "flex";
  };

  return (
    <>
      <Modal />

      <div className="mx-8 lg:mx-24">
        <div className="flex flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{daysList.at(date.getDay())}</h1>
          <button
            type="button"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-500 text-white"
            onClick={showModal}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="flex flex-col flex-nowrap items-center">
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
}
