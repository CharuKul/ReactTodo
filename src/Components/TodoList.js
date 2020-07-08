import React from "react";
import Todo from "./Todo";

// Todo List
const TodoList = ({ todoList, remove, edit }) => {
  const todoNode = todoList.map(todo => {
    return <Todo todo={todo} key={todo.id} remove={remove} edit={edit} />;
  });
  return <div>{todoNode}</div>;
};

export default TodoList;
