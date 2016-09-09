let initialState = {};

export default function modalsReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      let updatedModals = {}

      if (state[action.id] === undefined) {
        updatedModals[action.id] = Object.assign({}, { visible: true }, action.data);
      } else {
        updatedModals[action.id] = Object.assign({}, state[action.id], action.data);
        updatedModals[action.id].visible = !updatedModals[action.id].visible;
      }

      return Object.assign({}, state, updatedModals);

    default:
      return state;
  }
}
