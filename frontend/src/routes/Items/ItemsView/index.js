import { connect } from 'react-redux'
import requireAuthentication from '../../../utils/requireAuthentication' 
import actions from 'redux/actions/modals'

import ItemsView from './ItemsView'

const mapDispatchToProps = {
  toggleModal: actions.toggleModal
};

const mapStateToProps = (state) => ({});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ItemsView);

export default requireAuthentication(connectedComponent);
