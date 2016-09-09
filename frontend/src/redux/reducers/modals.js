let initialState = {};

export default function modalsReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      let mergeObject = {}
      mergeObject[action.id] = !state[action.id];
      return Object.assign({}, state, mergeObject);

    default:
      return state;
  }
}
