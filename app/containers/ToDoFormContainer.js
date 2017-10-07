import React from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo, updateFormState } from '../actions/toDoActions';
import ToDoForm from '../components/ToDoForm';

const mapStateToProps = function (state, ownProps) {
  return {
    
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    addTodo : function (taskName, dateOfCompletion) {
      dispatch(addTodo(taskName, dateOfCompletion));
    },
    updateTodo : function (id, taskName, dateOfCompletion) {
      dispatch(updateTodo(id, taskName, dateOfCompletion));
      dispatch(updateFormState(false, null));
    },
    onCancle : function () {
      dispatch(updateFormState(false, null));
    }
  }
}
const ToDoFormContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
export default ToDoFormContainer;
