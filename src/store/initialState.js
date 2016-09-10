import { getCookie } from '../utils/cookies'
import { initialState as sessionInitialState } from '../redux/reducers/session'

export default () => {
  let sessionCookie = getCookie('stock_session');
  let session = sessionCookie === '' ? sessionInitialState : JSON.parse(sessionCookie);

  return {
    session
  };
}
