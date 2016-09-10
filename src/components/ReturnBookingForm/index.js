import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import ReturnBookingForm from './ReturnBookingForm'

const mapDispatchToProps = {
  returnBooking: actions.returnBooking
};

const mapStateToProps = (state) => ({
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(ReturnBookingForm);
