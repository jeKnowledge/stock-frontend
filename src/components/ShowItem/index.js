import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import ShowItem from './ShowItem'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);
