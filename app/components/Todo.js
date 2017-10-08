import React from 'react';

/*const Todo = ({ toggleTodo, deleteTodo, updateTodo, taskName, completed }) => (
      
            
)
*/
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editState : false,
            editedText: props.taskName
        }
    }
    onTextEdit(e) {
        this.setState({
            editedText: e.target.value
        });
    }
    handleSubmit(e) {
        if(e.key === 'Enter') {
          this.props.updateTodo(this.state.editedText);
          this.setState({
            editState: false
          });
        }
      }
    render() {
        return (
            
            this.state.editState 
                ? (
                    <tr>
                    <td colSpan="3">
                        <input type="text" onKeyPress={this.handleSubmit.bind(this)} onChange={this.onTextEdit.bind(this)} value={this.state.editedText} placeholder="Wright down what you have to do..."/>
                    </td>
                    </tr>
                ) 
                : (
                    <tr>
                    <td>
                    <label className={this.props.completed ? "done" : "pending"}>
                        <input type="checkbox" onClick={this.props.toggleTodo} checked={this.props.completed}/>
                    </label>
                    </td>
                    <td onClick={() => {this.setState({editState: true})}}>
                        <span>{this.props.taskName}</span>
                    </td>
                    <td><button onClick={this.props.deleteTodo}>x</button>
                    </td>
                    </tr>
                )
            
        )
    }
}
export default Todo;
