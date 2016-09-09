import { connect } from 'react-redux'
import actions from 'redux/actions/items'
import NewItemForm from './NewItemForm'

const mapDispatchToProps = {
  createItem: actions.createItem
};

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);
