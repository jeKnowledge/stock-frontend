import { connect } from 'react-redux'
import ShowItem from './ShowItem'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  session: state.session,
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);
