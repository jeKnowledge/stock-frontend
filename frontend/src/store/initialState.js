import { getCookie } from '../utils/cookies'

export default () => {
  let accessTokenCookie = getCookie('stock_access_token');
  let accessToken = accessTokenCookie === '' ? null : accessTokenCookie;

  return {
    session: {
      accessToken
    }
  };
}
