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
    console.log('===FETCH_CONTACT===')
    console.log('===action.payload===', action.payload)
    console.log('===current state===', state)
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        errors: {}
      }
    default:
      return state
  }
}