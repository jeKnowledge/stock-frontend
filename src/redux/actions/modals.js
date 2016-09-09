const toggleModal = (id, data = {}) => ({
  type: 'TOGGLE_MODAL',
  id,
  data
})

const actions = {
  toggleModal
}

export default actions;
