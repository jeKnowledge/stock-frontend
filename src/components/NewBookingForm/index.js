import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import NewBookingForm from './NewBookingForm'

const mapDispatchToProps = {
  createBooking: actions.createBooking
};

const mapStateToProps = (state) => ({
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBookingForm);
