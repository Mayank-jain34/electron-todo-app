const todos = (state = [], action)=>{
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        id: action.id,
        taskName: action.taskName,
        completed: false
      };
      return [
        ...state,
        todo
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      });
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          taskName : action.taskName,
        })
      });
    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state
  }
}

export default todos;
