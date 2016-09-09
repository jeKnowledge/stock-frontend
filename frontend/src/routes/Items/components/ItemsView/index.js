import { connect } from 'react-redux'
import actions from 'redux/actions/modals'
import requireAuthentication from '../../../requireAuthentication' 
import ItemsView from './ItemsView'

const mapDispatchToProps = {
  toggleModal: actions.toggleModal
};

const mapStateToProps = (state) => ({});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ItemsView);

export default requireAuthentication(connectedComponent);
