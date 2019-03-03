import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import contactReducer from './contactReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  todoStore: todoReducer,
  contactStore: contactReducer,
  form: formReducer
})