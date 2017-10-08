import React from 'react';
import FilterList from './FilterList';
import ToDoFormContainer from '../containers/ToDoFormContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

const app = () => (
  <div className="app-container">
  <div className="main-header">
    <h2>todos</h2>
    <hr/>
  </div>
    <ToDoFormContainer />
    <FilterList />
    <VisibleTodoList />
  </div>
)

export default app;
