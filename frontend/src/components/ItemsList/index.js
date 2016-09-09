import { connect } from 'react-redux'
import ItemsList from './ItemsList'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
