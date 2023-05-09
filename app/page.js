"use client";

import { useState } from "react";

import Todo from "./Todo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const list = [
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
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [todos, setTodos] = useState(list);
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

  const todoItems = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      onDelete={handleDeleteTodo}
      openModal={openModal}
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

  function handleAddTodo(todo) {
    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: todo.title,
        description: todo.description,
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ]);
  }
  function handleUpdateTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            title: todo.title,
            description: todo.description,
            updatedAt: Date.now(),
          };
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((t) => t.id != id));
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        onAdd={handleAddTodo}
        onUpdate={handleUpdateTodo}
        {...modalProps}
      />

      <div className="mx-8 lg:mx-24">
        <div className="flex flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {date.toLocaleString("default", {
              weekday: "long",
              day: "2-digit",
              month: "short",
            })}
          </h1>
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
