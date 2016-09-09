const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    authToken: null
  },
  fetching: false
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_FETCHING':
      return Object.assign({}, state, {
        fetching: true
      });

    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        user: action.data,
        fetching: false
      });

    case 'LOGIN_ERROR':
      return Object.assign({}, state, {
        fetching: false
      });

    default:
      return state;
  }
}
