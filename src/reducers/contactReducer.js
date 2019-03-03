import initialState from './initialState'

export default function contactReducer(state = initialState.contactState, action) {
  // console.log('===action.type===', action.type)
  switch(action.type) {
    case 'ADD_CONTACT':
      return state
    case 'NEW_CONTACT':
      return {
        ...state,
        contact: {}
      }
    case 'SAVE_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        errors: {},
        loading: false
      }
    case 'UPDATE_CONTACT':
    const contact = action.payload
    console.log('after update contact =====', contact);
      return {
        ...state,
        contacts: state.contacts.map(item => item.id === contact.id ? contact : item),
        errors: {},
        loading: false
      }
    case 'DELETE_CONTACT':
    const id = action.payload.contact.id
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== id)
      }
    case 'EDIT_CONTACT':
      return state
    case 'FETCH_CONTACT':
    console.log('===FETCH_CONTACT===', action.payload)
    console.log('===state.contacts===', state.contacts)
      return {
        ...state,
        contact: action.payload
      }
    case 'FETCH_CONTACTS':
    console.log('===action.payload===', action.payload)
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