import * as axios from 'axios';

const loginSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  data: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    accessToken: response.data.access_token
  }
})

const loginError = (response) => ({
  type: 'LOGIN_ERROR',
  error: response.data.message
})

export const login = ({email, password}) => {
  return (dispatch, getState) => {
    const fetching = getState().session.fetching;
    if (fetching) return;

    dispatch({
      type: 'LOGIN_FETCHING'
    });

    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'post',
      data: {
        user: {
          email,
          password
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(loginSuccess(response));
      })
      .catch((error) => {
        dispatch(loginError(error.response));
      });
  }
}

const actions = {
  login
}

export default actions;
