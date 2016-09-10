const initialState = {};

const emptyAction = {
  fetching: false,
  message: null
}

const apiReducer = (state = initialState, action) => {
  let updatedState = {}

  switch(action.type) {
    case 'CREATE_ITEM_FETCHING':
    case 'FETCH_ITEMS_FETCHING':
    case 'CREATE_BOOKING_FETCHING':
    case 'ENTER_WAITING_QUEUE_FETCHING':
    case 'SIGN_IN_FETCHING':
    case 'SIGN_UP_FETCHING':
      updatedState[action.id] = Object.assign({}, emptyAction); 
      updatedState[action.id].fetching = true;
      return Object.assign({}, state, updatedState);

    case 'CREATE_ITEM_SUCCESS':
    case 'FETCH_ITEMS_SUCCESS':
    case 'CREATE_BOOKING_SUCCESS':
    case 'ENTER_WAITING_QUEUE_SUCCESS':
    case 'SIGN_IN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
      updatedState[action.id] = Object.assign({}, emptyAction); 
      return Object.assign({}, state, updatedState);

    case 'CREATE_ITEM_ERROR':
    case 'FETCH_ITEMS_ERROR':
    case 'CREATE_BOOKING_ERROR':
    case 'ENTER_WAITING_QUEUE_ERROR':
    case 'SIGN_IN_ERROR':
    case 'SIGN_UP_ERROR':
      updatedState[action.id] = Object.assign({}, emptyAction); 
      updatedState[action.id].message = action.message; 
      return Object.assign({}, state, updatedState);

    default:
      return state;
  }
}

export default apiReducer;
