import * as axios from 'axios';
import { setCookie } from '../../../utils/cookies'
import config from '../../../config';

const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
});

const logout = () => {
  return (dispatch, getState) => {
    let access_token = getState().session.access_token;

    let options = {
      url: `${config.api_url}/sessions`,
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
