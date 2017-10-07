let nextTodoId = 0

export const addTodo = (taskName, dateOfCompletion) => {
  return {
    type : 'ADD_TODO',
    id : nextTodoId++,
    taskName,
    dateOfCompletion
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type : 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id)=> {
  return {
    type : 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id)=> {
  return {
    type : 'DELETE_TODO',
    id
  }
}

export const updateTodo = (id, taskName, dateOfCompletion)=> {
  return {
    type : 'UPDATE_TODO',
    id,
    taskName,
    dateOfCompletion
  }
}

