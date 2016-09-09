import { connect } from 'react-redux'

import ShowItemModal from './ShowItemModal'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  items: state.items,
  modals: state.modals
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowItemModal);
