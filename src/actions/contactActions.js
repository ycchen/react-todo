
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
    type: 'FETCH_CONTACTS',
    payload: contacts
  }
}

export const newContact = () => {
  return (dispatch) => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export const saveContact = (contact) => {
  return (dispatch) => {
    return axios.post(apiUrl, contact)
      .then(response => {
        dispatch({ type: 'SAVE_CONTACT', payload: contact})
      })
      .catch(error => {
        throw(error)
      })
    
  }
}

export const updateContact = (contact) => {
  return(dispatch) => {
    return axios.put(`${apiUrl}/${contact.id}`, contact)
      .then(response => {
        console.log('update contact', response.data);
        dispatch({
          type: 'UPDATE_CONTACT',
          payload:response.data
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}
export const fetchContact = (id) => {
  console.log('========fetchContact action===== ', id)
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        console.log('get contact', response.data);
        dispatch(fetchContactSuccess(response.data))
      })
      .catch(error => {
        console.log('get cotnact error', error);
        throw(error)
      })
    
  }
}

export const fetchContactSuccess = (contact) => {
  console.log('========fetchContactSuccess action===== ', contact)
  return {
    type: 'FETCH_CONTACT',
    payload: contact
    
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