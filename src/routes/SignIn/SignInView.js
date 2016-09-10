import requireUnauthentication from '../../utils/requireUnauthentication'
import SignInForm from 'components/SignInForm'

export default requireUnauthentication(SignInForm);
