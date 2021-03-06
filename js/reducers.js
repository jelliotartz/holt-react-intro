import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: 'hello!!!!!!'
}

const setSearchTerm = (state, action) => {
  const newState = {}
  object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
