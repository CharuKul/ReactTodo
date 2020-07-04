import React from "react";
import "./styles.css";

const TodoBox = ({ handleAdd }) => {
  // Input box
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          handleAdd(input.value);
          input.value = "";
        }}
      >
        +
      </button>
    </div>
  );
};

const Todo = ({ todo, remove }) => {
  // Each Todo node

  return (
    <div>
      {todo.text + "     "}
      <button
        onClick={() => {
          remove(todo.id);
        }}
      >
        -
      </button>
    </div>
  );
};

const TodoList = ({ todoList, remove }) => {
  const todoNode = todoList.map(todo => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  return <div>{todoNode}</div>;
};

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentId: 0
    };
  }

  // Add todo handler
  handleAdd(val) {
    if (!val || val === "") {
      window.alert("Empty todo");
      return;
    }

    const todo = { text: val, id: this.state.currentId };
    this.state.todoList.push(todo);
    this.setState({
      todoList: this.state.todoList,
      currentId: this.state.currentId + 1
    });
  }

  // Remove todo handler
  handleRemove(id) {
    var remainingItems = this.state.todoList.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    });

    this.setState({ todoList: remainingItems });
  }

  render() {
    return (
      <div className="App" id="App">
        <h1>TO DO APP</h1>
        <div>
          <TodoBox handleAdd={this.handleAdd.bind(this)} />
          <TodoList
            todoList={this.state.todoList}
            remove={this.handleRemove.bind(this)}
          />
        </div>
      </div>
    );
  }
}
