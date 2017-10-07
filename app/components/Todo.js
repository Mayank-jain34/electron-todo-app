import React from 'react';

const Todo = ({ toggleTodo, deleteTodo, updateTodo, taskName, dateOfCompletion, completed }) => (
      <li className="list-group-item">
        <h4 onClick={toggleTodo} className="list-group-item-heading" style={{ textDecoration: completed ? 'line-through' : 'none'}}>{taskName}</h4>
        <p className="list-group-item-text">
          <span className="glyphicon glyphicon-hourglass"></span>
          {dateOfCompletion}
          {/*
            <button title="edit" type="button" className="btn btn-default" onClick={updateTodo} >
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
          */}
          <button title="delete" type="button" className="btn btn-default" onClick={deleteTodo} >
            <span className="glyphicon glyphicon-trash"></span>
          </button>

          <button title="toggle" type="button" className="btn btn-default" onClick={toggleTodo} >
              <span className="glyphicon glyphicon-flag"></span>
          </button>
        </p>
      </li>
)

export default Todo;
