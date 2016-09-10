import * as axios from 'axios';
import { setCookie } from '../../../utils/cookies'

const refreshSessionSuccess = (response) => ({
  id: 'refreshSession',
  type: 'REFRESH_SESSION_SUCCESS',
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

const refreshSession = () => {
  return (dispatch, getState) => {
    let access_token = getState().session.access_token;
    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'put',
      headers: {
        'Authorization': `Token token=${access_token}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        let action = refreshSessionSuccess(response);
        dispatch(action);
        setCookie('stock_session', JSON.stringify(action.session), 1);
      })
      .catch((error) => {
        dispatch({
          type: 'LOGOUT_SUCCESS'
        });
        setCookie('stock_access_token', '', 1);
      });
  }
}

export default refreshSession;
