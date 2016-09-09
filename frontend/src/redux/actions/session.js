import * as axios from 'axios';

const signInSuccess = (response) => ({
  type: 'SIGN_IN_SUCCESS',
  data: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    accessToken: response.data.access_token
  }
})

const signInError = (response) => ({
  type: 'SIGN_IN_ERROR',
  error: response.data.message
})

const signIn = ({email, password}) => {
  return (dispatch, getState) => {
    const fetching = getState().session.fetching;
    if (fetching) return;

    dispatch({
      type: 'SIGN_IN_FETCHING'
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
        dispatch(signInSuccess(response));
      })
      .catch((error) => {
        dispatch(signInError(error.response));
      });
  }
}

const signUpSuccess = (response) => ({
  type: 'SIGN_UP_SUCCESS',
  data: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    accessToken: response.data.access_token
  }
});

const signUpError = (response) => ({
  type: 'SIGN_UP_ERROR',
  error: response.data.message
});

const signUp = ({name, email, password}) => {
  return (dispatch, getState) => {
    const fetching = getState().session.fetching;
    if (fetching) return;

    dispatch({
      type: 'SIGN_UP_FETCHING'
    });

    let options = {
      url: 'http://localhost:4000/v1/users', // FIX hardcoded url
      method: 'post',
      data: {
        user: {
          name,
          email,
          password
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(signUpSuccess(response));
      })
      .catch((error) => {
        dispatch(signUpError(error.response));
      });
  }
}

const logoutSuccess = (response) => ({
  type: 'LOGOUT_SUCCESS',
  message: response.data.message
});

const logout = () => {
  return (dispatch, getState) => {
    let accessToken = getState().session.user.accessToken;

    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'delete',
      headers: {
        'Authorization': `Token token=${accessToken}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(logoutSuccess(response));
      })
  }
}

const actions = {
  signIn,
  signUp,
  logout
}

export default actions;
