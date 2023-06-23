import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, delateTodo } from "./TodoSlice";

const Todo = () => {
  const { todos, msg } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h2>Todo</h2>
      <input
        type="text"
        placeholder="Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      &nbsp;
      <button onClick={() => dispatch(addNewTodo(input))} type="submit">
        Add
      </button>
      <ul>
        {todos.length > 0
          ? todos.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => dispatch(delateTodo(item))}>X</button>
                </li>
              );
            })
          : "not found"}
      </ul>
    </>
  );
};

export default Todo;
