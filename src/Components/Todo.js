import React from "react";

// Todo node
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      inputValue: this.props.todo.text
    };
  }

  // Edit todo handler
  handleEdit = () => {
    this.setState({ isEdit: true });
  };

  // Edit todo handler
  handleEditDone = id => {
    this.setState({ isEdit: false });
    this.props.edit(id, this.state.inputValue);
  };

  // Remove todo handler
  handleRemove = id => {
    this.props.remove(id);
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  renderInput = () => {
    const { todo } = this.props;
    const { isEdit, inputValue } = this.state;

    if (isEdit) {
      return (
        <li>
          <input type="text" value={inputValue} onChange={this.handleChange} />
          <button onClick={this.handleEditDone.bind(this, todo.id)}>
            Done
          </button>
        </li>
      );
    }

    return (
      <li>
        {todo.text}
        <button onClick={this.handleEdit}>Edit</button>

        <button onClick={this.handleRemove.bind(this, todo.id)}>Delete</button>
      </li>
    );
  };

  render() {
    return <div>{this.renderInput()}</div>;
  }
}
