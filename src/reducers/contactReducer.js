import initialState from './initialState'

export default function contactReducer(state = initialState.contactState, action) {
  switch(action.type) {
    case 'ADD_CONTACT':
    return state
    case 'DELETE_CONTACT':
      return state
    case 'EDIT_CONTACT':
      return state
    case 'FETCH_CONTACT':
      return state
    default:
      return state
  }
}