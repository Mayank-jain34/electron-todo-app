import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
    this.state = {
      taskName : ""
    }
  }
  onTaskNameChange(e) {
    console.log("task Name change", e.target.value);
    this.setState({taskName : e.target.value});
  }

  componentWillReceiveProps(nextProps) {

  }
  handleSubmit(e) {
    if(e.key === 'Enter') {
      this.props.addTodo(this.state.taskName);
      this.setState({
        taskName : ""
      });
    }
  }

  render() {
    return(
      <div className="todo-form-container">
        <input placeholder="Wright down what you have to do..." onChange={this.onTaskNameChange} onKeyPress={this.handleSubmit} value={this.state.taskName}></input>
      </div>
    );
  }
}

export default ToDoForm;
