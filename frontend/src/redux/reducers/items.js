const initialState = {
  all: new Array,
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
      let newItems = [action.item, ...state.all];
      return Object.assign({}, state, {
        all: newItems,
        fetching: false 
      });

    case 'NEW_ITEM_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });

    case 'FETCH_ITEMS_SUCCESS':
      return Object.assign({}, state, {
        all: action.items,
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
