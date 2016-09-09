import * as axios from 'axios';

const loginSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  data: response.data
})

const loginError = (error) => ({
  type: 'LOGIN_ERROR',
  error: error
})

export const login = ({email, password}) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGIN_FETCHING'
    });

    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'post',
      data: { email: email, password: password }
    }

    return axios.request(options)
      .then((response) => {
        console.log(response);
        dispatch(loginSuccess(response));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  }
}

const actions = {
  login
}

export default actions;
