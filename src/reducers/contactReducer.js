import initialState from './initialState'

export default function contactReducer(state = initialState.contactState, action) {
  switch(action.type) {
    case 'ADD_CONTACT':
    return state
    case 'DELETE_CONTACT':
    const id = action.payload.contact.id
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== id)
      }
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