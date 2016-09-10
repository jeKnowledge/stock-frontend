const initialState = {
  all: [],
  byID: {},
};

const itemsReducer = (state = initialState, action) => {
  let newAll = [];
  let newByID = {};

  switch(action.type) {
    case 'CREATE_ITEM_SUCCESS':
      newAll = [action.item.id, ...state.all]; 
      newByID = Object.assign({}, state.byID);
      newByID[action.item.id] = action.item;

      return Object.assign({}, state, {
        all: newAll,
        byID: newByID
      });

    case 'FETCH_ITEMS_SUCCESS':
      action.items.forEach((item) => {
        newAll.push(item.id);
        newByID[item.id] = item;
      });

      return Object.assign({}, state, {
        all: newAll,
        byID: newByID
      });

    case 'CREATE_BOOKING_SUCCESS':
      // FIX improve this with a bookings reducer
      let newItem = state.byID[action.booking.item_id]; 
      newItem.bookings = [action.booking, ...newItem.bookings];

      newByID = Object.assign({}, state.byID);
      newByID[action.booking.item_id] = newItem;

      return Object.assign({}, state, {
        byID: newByID,
      });

    case 'ENTER_WAITING_QUEUE_SUCCESS':
      // FIX improve this with a waiting queue reducer
      newItem = state.byID[action.waiting_queue.item_id]; 
      newItem.waiting_queue = [action.waiting_queue, ...newItem.waiting_queue];

      newByID = Object.assign({}, state.byID);
      newByID[action.waiting_queue.item_id] = newItem;

      return Object.assign({}, state, {
        byID: newByID,
        fetching: false
      });

    default:
      return state;
  }
}

export default itemsReducer;
