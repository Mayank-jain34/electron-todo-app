import React from 'react';
import { connect } from 'react-redux';
import { addTodo} from '../actions/toDoActions';
import ToDoForm from '../components/ToDoForm';

const mapStateToProps = function (state, ownProps) {
  return {
    
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    addTodo : function (taskName) {
      dispatch(addTodo(taskName));
    }
  }
}
const ToDoFormContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
export default ToDoFormContainer;
