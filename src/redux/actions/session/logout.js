import * as axios from 'axios';
import { setCookie } from '../../../utils/cookies'

const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
});

const logout = () => {
  return (dispatch, getState) => {
    let access_token = getState().session.access_token;

    let options = {
      url: 'http://localhost:4000/v1/sessions', // FIX hardcoded url
      method: 'delete',
      headers: {
        'Authorization': `Token token=${access_token}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(logoutSuccess(response));
        setCookie('stock_session', '', 1);
      })
  }
}

export default logout;
