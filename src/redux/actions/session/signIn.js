import * as axios from 'axios';
import { setCookie } from '../../../utils/cookies'
import config from '../../../config';

const signInSuccess = (response) => ({
  id: 'signIn',
  type: 'SIGN_IN_SUCCESS',
  session: {
    user: {
      id: response.data.user.id,
      name: response.data.user.name,
      email: response.data.user.email,
      slack_handler: response.data.user.slack_handler
    },
    access_token: response.data.user.access_token
  }
})

const signInError = (response) => ({
  id: 'signIn',
  type: 'SIGN_IN_ERROR',
  message: response.data.message
})

const signIn = ({email, password}) => {
  return (dispatch, getState) => {
    const apiState = getState().api['signIn'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'signIn',
      type: 'SIGN_IN_FETCHING'
    });

    let options = {
      url: `${config.api_url}/sessions`,
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
        let action = signInSuccess(response);
        dispatch(action);
        setCookie('stock_session', JSON.stringify(action.session), 1);
      })
      .catch((error) => {
        dispatch(signInError(error.response));
      });
  }
}

export default signIn;
