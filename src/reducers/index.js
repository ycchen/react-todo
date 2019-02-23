import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import contactReducer from './contactReducer'

export default combineReducers({
  todoStore: todoReducer,
  contactStore: contactReducer
})