import initialState from './initialState'

export default function todoReducer(state = initialState.todoState, action) {
  switch(action.type) {
    case 'ADD_TODO':
    console.log('===ADD_TODO===', action.payload)
    console.log('===current state===', state)
      return {
        ...state, 
        todo: {},
        todos: [...state.todos, action.payload],
        errors: {},
        loading: false
      }
    case 'DELETE_TODO':
    console.log('===DELETE_TODO===', action.payload)
    console.log('===current state===', state)
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.todo.id)
      } 
    case 'FETCH_TODO':
    console.log('===FETCH_TODO===')
    console.log('===action.payload===', action.payload)
    console.log('===current state===', state)
      return {
        ...state,
        todos: action.payload,
        loading: false,
        errors: {}
      }
    default:
      return state
  }
}