import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo })=>(
  <div className="todo-list-container">
  <table>
    {
      todos.map(todo =>
        <Todo key={todo.id} {...todo }
          toggleTodo = {() => toggleTodo(todo.id)}
          deleteTodo = {() => deleteTodo(todo.id)}
          updateTodo = {(todoText) => updateTodo(todo.id, todoText)}
        />
      )
    }
    </table>
  </div>
)

export default TodoList
