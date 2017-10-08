import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, updateTodo } from '../actions/toDoActions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter)=>{
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

const mapStateToProps = (state) =>{
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    updateTodo : function (id, taskName) {
      dispatch(updateTodo(id, taskName));
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
