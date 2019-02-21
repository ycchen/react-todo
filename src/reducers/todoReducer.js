import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO
} from '../types'

const defaultState = {
  todos: [],
  todo: {},
  loading: false,
  errors: {}
}
export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_TODO:
    console.log('===ADD_TODO===', action.payload)
    console.log('===current state===', state)
      return {
        ...state, 
        todo: {},
        todos: [...state.todos, action.payload],
        errors: {},
        loading: false
      }
    case DELETE_TODO:
    console.log('===DELETE_TODO===', action.payload)
    console.log('===current state===', state)
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.todo.id)
      } 
    case FETCH_TODO:
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