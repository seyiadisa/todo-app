"use client";

import { useState } from "react";

import Todo from "./Todo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
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

  const todos = [
    {
      id: 3,
      title: "Walk my dog",
      description: "",
      completed: true,
      createdAt: "2023-05-04T21:12:26.648+01:00",
      updatedAt: "2023-05-04T21:12:26.648+01:00",
    },
    {
      id: 7,
      title: "Make Cheese",
      description: "Make some good tasting cheese",
      completed: false,
      createdAt: "2023-05-04T22:43:33.143+01:00",
      updatedAt: "2023-05-04T22:43:33.143+01:00",
    },
  ];

  const todoItems = todos.map((todo) => (
    <Todo
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      onClick={openModal}
    />
  ));

  function openModal(props) {
    setIsOpen(true);
    setModalProps(props);
  }

  function closeModal() {
    setIsOpen(false);
    setModalProps({});
  }

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} {...modalProps} />

      <div className="mx-8 lg:mx-24">
        <div className="flex flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{daysList.at(date.getDay())}</h1>
          <button
            type="button"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-500 text-white"
            onClick={() => openModal({})}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="flex flex-col flex-nowrap items-center">
          {todoItems}
        </div>
      </div>
    </>
  );
}
