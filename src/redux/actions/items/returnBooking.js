import * as axios from 'axios';

const returnBookingSuccess = (response) => ({
  id: 'returnBooking',
  type: 'RETURN_BOOKING_SUCCESS',
  booking: response.data.booking
})

const returnBookingError = (response) => ({
  id: 'enterWaitingQueue',
  type: 'RETURN_BOOKING_ERROR',
  message: response.data.message
})

const returnBooking = (booking_id) => {
  return (dispatch, getState) => {
    const apiState = getState().api['returnBooking'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'returnBooking',
      type: 'RETURN_BOOKING_FETCHING'
    });

    let access_token = getState().session.access_token;
    let options = {
      url: `http://localhost:4000/v1/bookings/${booking_id}/return`, // FIX hardcoded url
      method: 'put',
      headers: {
        'Authorization': `Token token=${access_token}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(returnBookingSuccess(response));
      })
      .catch((error) => {
        dispatch(returnBookingError(error.response));
      });
  }
}

export default returnBooking;
