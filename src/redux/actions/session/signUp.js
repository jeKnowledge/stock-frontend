import * as axios from 'axios';
import { setCookie } from '../../../utils/cookies'

const signUpSuccess = (response) => ({
  id: 'signUp',
  type: 'SIGN_UP_SUCCESS',
  session: {
    user: {
      id: response.data.user.id,
      name: response.data.user.name,
      email: response.data.user.email,
      slack_handler: response.data.user.slack_handler
    },
    access_token: response.data.access_token
  }
});

const signUpError = (response) => ({
  id: 'signUp',
  type: 'SIGN_UP_ERROR',
  message: response.data.message
});

const signUp = ({name, email, slack_handler, password}) => {
  return (dispatch, getState) => {
    const apiState = getState().api['signUp'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'signUp',
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
        let action = signUpSuccess(response);
        dispatch(action);
        setCookie('stock_session', JSON.stringify(action.session), 1);
      })
      .catch((error) => {
        dispatch(signUpError(error.response));
      });
  }
}

export default signUp;
