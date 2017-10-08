let nextTodoId = 0

export const addTodo = (taskName) => {
  return {
    type : 'ADD_TODO',
    id : nextTodoId++,
    taskName
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

export const updateTodo = (id, taskName)=> {
  return {
    type : 'UPDATE_TODO',
    id,
    taskName
  }
}

