import requireUnauthentication from '../../utils/requireUnauthentication'
import SignUpForm from 'components/SignUpForm'

export default requireUnauthentication(SignUpForm);
