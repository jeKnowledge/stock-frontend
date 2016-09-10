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
    case 'BOOKING_FETCHING':
    case 'WAITING_QUEUE_FETCHING':
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

    case 'BOOK_SUCCESS':
      let newItem = state.byID[action.data.item_id]; 
      newItem.bookings = [action.data, ...newItem.bookings];

      newByID = Object.assign({}, state.byID);
      newByID[action.data.item_id] = newItem;

      return Object.assign({}, state, {
        byID: newByID,
        fetching: false
      });

    case 'BOOK_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });

    case 'WAITING_QUEUE_SUCCESS':
      newItem = state.byID[action.data.item_id]; 
      newItem.waiting_queue = [action.data, ...newItem.waiting_queue];

      newByID = Object.assign({}, state.byID);
      newByID[action.data.item_id] = newItem;

      return Object.assign({}, state, {
        byID: newByID,
        fetching: false
      });


    case 'WAITING_QUEUE_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: action.error
      });


    default:
      return state;
  }
}

export default itemsReducer;
