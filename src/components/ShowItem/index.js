import { connect } from 'react-redux'
import ShowItem from './ShowItem'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);
