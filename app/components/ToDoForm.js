import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancle = this.handleCancle.bind(this);
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
    this.onDateOfCompletionChange = this.onDateOfCompletionChange.bind(this);
    this.state = {
      taskName : "",
      dateOfCompletion : ""
    }
  }
  onTaskNameChange(e) {
    this.setState({taskName : e.target.value});
  }
  onDateOfCompletionChange(e) {
    this.setState({dateOfCompletion : e.target.value});
  }
  componentWillReceiveProps(nextProps) {

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.taskName, this.state.dateOfCompletion);
    this.setState({
      taskName : "",
      dateOfCompletion : ""
    });
  }
  handleCancle() {
    this.props.onCancle();
    this.setState({
      taskName : "",
      dateOfCompletion : ""
    });
  }
  render() {
    return(
      <div className="panel panel-primary">
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="todoText">Task Name:</label>
              <input type="text" value={this.state.taskName} onChange={this.onTaskNameChange} className="form-control" id="todoText" placeholder="Add todo" required/>
            </div>
            <div className="form-group">
              <label htmlFor="todoDate">Date of completion:</label>
              <input type="date" value={this.state.dateOfCompletion} onChange={this.onDateOfCompletionChange} className="form-control" id="todoDate" required/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">{this.props.isUpdating ? "Update Todo" : "Add Todo"}</button>
              {
                this.props.isUpdating ?
                  (<button type="button" onClick={this.handleCancle} className="btn btn-default btn-block">Cancel</button>)
                : null
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoForm;
