const blankUser = {
  id: null,
  name: null,
  email: null,
  accessToken: null
}

const initialState = {
  user: blankUser,
  fetching: false,
  fetchingError: null
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'SIGN_IN_FETCHING':
    case 'SIGN_UP_FETCHING':
      return Object.assign({}, state, {
        fetching: true
      });

    case 'SIGN_IN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state, {
        user: action.data,
        fetching: false
      });

    case 'SIGN_IN_ERROR':
    case 'SIGN_UP_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });

    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        user: blankUser
      });

    default:
      return state;
  }
}
