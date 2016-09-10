const blankUser = {
  id: null,
  name: null,
  email: null,
  slack_handler: null
}

export const initialState = {
  user: blankUser,
  access_token: null,
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'SIGN_IN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
    case 'SESSION_REFRESH_SUCCESS':
      return Object.assign({}, state, action.session);

    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}
