import React from "react";
import "./styles.css";
import TodoBox from "./Components/TodoBox";
import TodoList from "./Components/TodoList";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentId: 0,
      test: false
    };
  }

  // Add todo handler
  handleAdd = val => {
    if (!val) {
      window.alert("Empty todo");
      return;
    }

    const todo = { text: val, id: this.state.currentId };
    var newList = [...this.state.todoList, todo];
    this.setState({
      todoList: newList,
      currentId: this.state.currentId + 1
    });
  };

  // Remove todo handler
  handleRemove = id => {
    var remainingItems = this.state.todoList.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    });

    this.setState({ todoList: remainingItems });
  };

  // Remove todo handler
  handleEdit = (id, value) => {
    var updatedItems = this.state.todoList.filter(todo => {
      if (todo.id === id) {
        todo.text = value;
      }
      return todo;
    });

    this.setState({ todoList: updatedItems });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="App" id="App">
        <h1>TO DO APP</h1>
        <div>
          <TodoBox handleAdd={this.handleAdd} />
          <TodoList
            todoList={todoList}
            remove={this.handleRemove}
            edit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}
