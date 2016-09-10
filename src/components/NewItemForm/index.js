import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import NewItemForm from './NewItemForm'

const mapDispatchToProps = {
  createItem: actions.createItem
};

const mapStateToProps = (state) => ({
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);
