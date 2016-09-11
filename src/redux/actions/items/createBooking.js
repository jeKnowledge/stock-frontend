import * as axios from 'axios';

const createBookingSuccess = (response) => ({
  id: 'createBooking',
  type: 'CREATE_BOOKING_SUCCESS',
  booking: response.data.booking
});

const createBookingError = (response) => ({
  id: 'createBooking',
  type: 'CREATE_BOOKING_ERROR',
  message: response.data.message
});

const createBooking = ({ item_id, startDate, endDate }) => {
  return (dispatch, getState) => {
    const apiState = getState().api['createBooking'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'createBooking',
      type: 'CREATE_BOOKING_FETCHING'
    });

    let access_token = getState().session.access_token;
    let user_id = getState().session.user.id;
    let options = {
      url: 'https://frozen-beach-71092.herokuapp.com/v1/bookings', // FIX hardcoded url
      method: 'post',
      headers: {
        'Authorization': `Token token=${access_token}`,
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
        dispatch(createBookingSuccess(response));
      })
      .catch((error) => {
        dispatch(createBookingError(error.response));
      });
  }
}

export default createBooking;
