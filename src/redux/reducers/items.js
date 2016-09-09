const initialState = {
  all: [],
  byID: {},
  fetching: false,
  fetchingError: null
};

const itemsReducer = (state = initialState, action) => {
  switch(action.type) {
    // FIX same state value for two different actions can be dangerous
    case 'NEW_ITEM_FETCHING':
    case 'ITEMS_FETCHING':
      return Object.assign({}, state, {
        fetching: true
      });

    case 'NEW_ITEM_SUCCESS':
      let newAll = [action.item.id, ...state.all]; 
      let newByID = Object.assign({}, state.byID);
      newByID[action.item.id] = action.item;

      return Object.assign({}, state, {
        all: newAll,
        byID: newByID,
        fetching: false 
      });

    case 'NEW_ITEM_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });

    case 'FETCH_ITEMS_SUCCESS':
      newAll = [];
      newByID = {};
      action.items.forEach((i) => {
        newAll = [i.id, ...newAll];
        newByID[i.id] = i;
      });

      return Object.assign({}, state, {
        all: newAll,
        byID: newByID,
        fetching: false
      });

    case 'FETCH_ITEMS_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });

    default:
      return state;
  }
}

export default itemsReducer;
