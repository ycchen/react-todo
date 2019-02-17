import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO
} from '../types'

import axios from 'axios'

const apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'

export const createTodo =({todo}) =>{
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
      id: data.id,
      text: data.text
    }
  }
}


export const deleteTodo = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteTodoSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}


export const deleteTodoSuccess = id => {
  return {
    type: DELETE_TODO,
    payload: {
      todo: id
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