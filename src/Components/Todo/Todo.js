import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import TodoList from "../TodoList/TodoList";
import Header from "../Header/Header";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header title='TodoList'/>
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
