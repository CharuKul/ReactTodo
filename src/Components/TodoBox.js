import React from "react";

// Input box
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleInput = () => {
    this.props.handleAdd(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button onClick={this.handleInput}>+</button>
      </div>
    );
  }
}
