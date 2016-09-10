import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import WaitingQueueForm from './WaitingQueueForm'

const mapDispatchToProps = {
  enterWaitingQueue: actions.enterWaitingQueue
};

const mapStateToProps = (state) => ({
  items: state.items,
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingQueueForm);
