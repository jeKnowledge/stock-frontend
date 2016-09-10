import * as axios from 'axios';

const enterWaitingQueueSuccess = (response) => ({
  id: 'enterWaitingQueue',
  type: 'ENTER_WAITING_QUEUE_SUCCESS',
  waiting_queue: response.data.waiting_queue
})

const enterWaitingQueueError = (response) => ({
  id: 'enterWaitingQueue',
  type: 'ENTER_WAITING_QUEUE_ERROR',
  message: response.data.message
})

const enterWaitingQueue = (item_id) => {
  return (dispatch, getState) => {
    const apiState = getState().api['enterWaitingQueue'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'enterWaitingQueue',
      type: 'ENTER_WAITING_QUEUE_FETCHING'
    });

    let access_token = getState().session.access_token;
    let user_id = getState().session.user.id;
    let options = {
      url: 'http://localhost:4000/v1/waiting_queues', // FIX hardcoded url
      method: 'post',
      headers: {
        'Authorization': `Token token=${access_token}`,
      },
      data: {
        waiting_queue: {
          user_id,
          item_id
        }
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(enterWaitingQueueSuccess(response));
      })
      .catch((error) => {
        dispatch(enterWaitingQueueError(error.response));
      });
  }
}

export default enterWaitingQueue;
