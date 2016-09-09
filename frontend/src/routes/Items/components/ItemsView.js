import { connect } from 'react-redux'
import actions from 'redux/actions/items'

import ItemsList from 'components/ItemsList'

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);


