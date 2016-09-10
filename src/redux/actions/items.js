import * as axios from 'axios';

const newItemSuccess = (response) => ({
  type: 'NEW_ITEM_SUCCESS',
  item: {
    id: response.data.id,
    name: response.data.name,
    photo_url: response.data.photo_url
  }
})

const newItemError = (response) => ({
  type: 'NEW_ITEM_ERROR',
  error: response.data.message
})

const createItem = ({name, photoUrl}) => {
  return (dispatch, getState) => {
    const fetching = getState().items.fetching;
    if (fetching) return;

    dispatch({
      type: 'NEW_ITEM_FETCHING'
    });

    let accessToken = getState().session.accessToken;
    let options = {
      url: 'http://localhost:4000/v1/items', // FIX hardcoded url
      method: 'post',
      headers: {
        'Authorization': `Token token=${accessToken}`,
      },
      data: {
        item: {
          name,
          photo_url: photoUrl
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(newItemSuccess(response));
      })
      .catch((error) => {
        dispatch(newItemError(error.response));
      });
  }
}

const fetchItemsSuccess = (response) => ({
  type: 'FETCH_ITEMS_SUCCESS',
  items: response.data
});

const fetchItemsError = (response) => ({
  type: 'FETCH_ITEMS_ERROR',
  error: response.data.message
});

const fetchItems = () => {
  return (dispatch, getState) => {
    const fetching = getState().items.fetching;
    if (fetching) return;

    dispatch({
      type: 'ITEMS_FETCHING'
    });

    let accessToken = getState().session.accessToken;
    let options = {
      url: 'http://localhost:4000/v1/items', // FIX hardcoded url
      method: 'get',
      headers: {
        'Authorization': `Token token=${accessToken}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(fetchItemsSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchItemsError(error.response));
      });
  }
}

const bookSuccess = (response) => ({
  type: 'BOOK_SUCCESS',
  data: response.data
});

const bookError = (response) => ({
  type: 'BOOK_ERROR',
  error: response.data.message
});

const book = ({ item_id, startDate, endDate }) => {
  return (dispatch, getState) => {
    const fetching = getState().items.fetching;
    if (fetching) return;

    dispatch({
      type: 'BOOKING_FETCHING'
    });

    let accessToken = getState().session.accessToken;
    let user_id = getState().session.user.id;
    let options = {
      url: 'http://localhost:4000/v1/bookings', // FIX hardcoded url
      method: 'post',
      headers: {
        'Authorization': `Token token=${accessToken}`,
      },
      data: {
        booking: {
          user_id,
          item_id,
          start_date: startDate, 
          end_date: endDate
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(bookSuccess(response));
      })
      .catch((error) => {
        dispatch(bookError(error.response));
      });
  }
}

const actions = {
  createItem,
  fetchItems,
  book
};

export default actions;
