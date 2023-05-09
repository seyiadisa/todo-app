"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Todo from "./Todo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const date = new Date(Date());
  const config = {
    baseUrl: "https://go-todo-api.onrender.com/api/todos/",
  };

  useEffect(() => getAllTodos(), []);

  function getAllTodos() {
    axios
      .get("https://go-todo-api.onrender.com/api/todos/")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((e) => alert(e));
  }

  const todoItems = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      onComplete={handleCompleteTodo}
      onDelete={handleDeleteTodo}
      openModal={openModal}
    />
  ));

  function openModal(id) {
    setIsOpen(true);
    axios
      .get(`https://go-todo-api.onrender.com/api/todos/${id}`)
      .then((res) => {
        setModalProps({
          id: res.data.todo.id,
          title: res.data.todo.title,
          description: res.data.todo.description,
        });
      })
      .catch((e) => {
        setModalProps({ id: null, title: "", description: "" });
      });
  }

  function closeModal() {
    setIsOpen(false);
    setModalProps({});
  }

  function handleAddTodo(todo) {
    axios
      .post(`https://go-todo-api.onrender.com/api/todos`, {
        title: todo.title,
        description: todo.description,
      })
      .then((res) => {
        getAllTodos();
      })
      .catch((e) => alert(e));
  }

  function handleUpdateTodo(todo) {
    axios
      .patch(`https://go-todo-api.onrender.com/api/todos/${todo.id}`, {
        title: todo.title,
        description: todo.description,
      })
      .then((res) => {
        getAllTodos();
      })
      .catch((e) => alert(e));
  }

  function handleCompleteTodo(id, checked) {
    return axios.put(
      `https://go-todo-api.onrender.com/api/todos/${id}/status`,
      {
        completed: checked,
      }
    );
  }

  function handleDeleteTodo(id) {
    axios
      .delete(`https://go-todo-api.onrender.com/api/todos/${id}`)
      .then((res) => {
        getAllTodos();
      })
      .catch((e) => alert(e));
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
            className="flex justify-center items-center w-10 h-10 rounded-full bg-green-700 hover:bg-green-900 text-white dark:bg-green-400 dark:hover:bg-green-200 dark:text-slate-950"
            onClick={() => openModal(null)}
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
