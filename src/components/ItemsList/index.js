import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import ItemsList from './ItemsList'

const mapDispatchToProps = {
  fetchItems: actions.fetchItems
};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
