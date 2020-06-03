export const urlsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_URLS': {
      return action.urls
    }
    case 'CLEAR_URLS': {
      return []
    }
    case 'ADD_URL': {
      return [
        ...state.filter(link => action.url.hashid !== link.hashid),
        action.url
      ]
    }
    case 'DELETE_URL':
      return state.filter(link => link.hashid !== action.id)
    default:
      throw new Error('Unexpected action')
  }
}
