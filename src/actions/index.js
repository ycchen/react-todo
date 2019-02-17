import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO
} from '../types'

import axios from 'axios'

const apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'

export const createTodo =({todo}) =>{
  console.log('createTodo got called')
  return(dispatch) => {
    return axios.post(apiUrl, {text: todo})
      .then(respone => {
        dispatch(createTodoSuccess(respone.data))
      })
      .catch(error => {
        throw(error)
      })
    
  }
}

export const createTodoSuccess = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      _id: data._id,
      text: data.text
    }
  }
}

export const fetchAllTodos = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchTodos(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchTodos = (todos) => {
  return {
    type: FETCH_TODO,
    todos
  }
}