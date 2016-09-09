import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import NewBookingForm from './NewBookingForm'

const mapDispatchToProps = {
  book: actions.book
};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBookingForm);
