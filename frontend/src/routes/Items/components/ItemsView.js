import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import requireAuthentication from '../../requireAuthentication' 

import ItemsList from 'components/ItemsList'

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  items: state.items
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ItemsList);

export default requireAuthentication(connectedComponent);
