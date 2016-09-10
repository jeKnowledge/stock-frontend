import * as axios from 'axios';
import { setCookie } from '../../utils/cookies'

const signInSuccess = (response) => ({
  type: 'SIGN_IN_SUCCESS',
  user: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email
  },
  accessToken: response.data.access_token
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
        setCookie('stock_access_token', response.data.access_token, 1);
      })
      .catch((error) => {
        dispatch(signInError(error.response));
      });
  }
}

const signUpSuccess = (response) => ({
  type: 'SIGN_UP_SUCCESS',
  user: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    slack_handler: response.data.slack_handler
  },
  accessToken: response.data.access_token
});

const signUpError = (response) => ({
  type: 'SIGN_UP_ERROR',
  error: response.data.message
});

const signUp = ({name, email, slack_handler, password}) => {
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
          slack_handler,
          password
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(signUpSuccess(response));
        setCookie('stock_access_token', response.data.access_token, 1);
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
    let accessToken = getState().session.accessToken;

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
        setCookie('stock_access_token', '', 1);
      })
  }
}

const refreshSessionSuccess = (response) => ({
  type: 'SESSION_REFRESH_SUCCESS',
  user: {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email
  },
  accessToken: response.data.access_token
})

const refreshSession = () => {
  return (dispatch, getState) => {
    const fetching = getState().session.fetching;
    if (fetching) return;

    dispatch({
      type: 'SESSION_REFRESH_FETCHING'
    });

    let accessToken = getState().session.accessToken;
    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'put',
      headers: {
        'Authorization': `Token token=${accessToken}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(refreshSessionSuccess(response));
        setCookie('stock_access_token', response.data.access_token, 1);
      })
      .catch((error) => {
        console.log(error)
      });
  }
}

const actions = {
  signIn,
  signUp,
  logout,
  refreshSession
}

export default actions;
