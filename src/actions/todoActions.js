import axios from 'axios'

const apiUrl = 'https://5c6ac9b9d98e3600141cab70.mockapi.io/api/todos'

export const createTodo =({todo}) =>{
  return(dispatch) => {
    return axios.post(apiUrl, {text: todo})
      .then(respone => {
        console.log('after saved todo =======', respone.data)
        dispatch(createTodoSuccess(respone.data))
      })
      .catch(error => {
        throw(error)
      })
    
  }
}

export const createTodoSuccess = (data) => {
  return {
    type: 'ADD_TODO',
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


export const deleteTodoSuccess = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      todo: id
    }
  }
}

export const fetchAllTodos = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        console.log('====fetchTodos==Resp', response.data)
        dispatch(fetchTodos(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchTodos = (todos) => {
  console.log('========fetchTodos action===== ', todos)
  return {
    type: 'FETCH_TODO',
    payload: todos
  }
}