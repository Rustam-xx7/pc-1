"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex flex-col gap-4 mt-6 items-center w-full">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 w-[50%]"
        >
          <span className="text-gray-700">{todo.text}</span>
          <button
            onClick={() => handleRemoveTodo(todo.id)}
            className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
