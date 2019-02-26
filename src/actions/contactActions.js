
import axios from 'axios'
// import { fetchTodos } from './todoActions';

const apiUrl = 'https://5c6ac9b9d98e3600141cab70.mockapi.io/api/contacts'

export const fetchAllContacts = () => {
  return dispatch => {
    return axios.get(apiUrl)
      .then(response => {
        console.log('====fetchTodos==Resp', response.data)
        dispatch(fetchContacts(response.data))
      })
      .catch(error => {
        console.log('====fetchTodos==errors', error)
        throw(error)
      })
  }
}

export const fetchContacts = (contacts) => {
  console.log('========fetchContacts action===== ', contacts)
  return {
    type: 'FETCH_CONTACT',
    payload: contacts
  }
}

export const deleteContact = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        console.log('===deleteContact== axios response', response.data)
        dispatch(deleteContactSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const deleteContactSuccess = (id) => {
  console.log('=====deleteContact===', id)
  return {
    type: 'DELETE_CONTACT',
    payload: {
      contact: id
    }
  }
}