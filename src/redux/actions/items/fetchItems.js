import * as axios from 'axios';
import config from '../../../config';

const fetchItemsSuccess = (response) => ({
  id: 'fetchItems',
  type: 'FETCH_ITEMS_SUCCESS',
  items: response.data.items
});

const fetchItemsError = () => ({
  id: 'fetchItems',
  type: 'FETCH_ITEMS_ERROR',
  message: 'There was an error when fetching items form server.' 
});

const fetchItems = () => {
  return (dispatch, getState) => {
    const apiState = getState().api['fetchItems'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'fetchItems',
      type: 'FETCH_ITEMS_FETCHING'
    });

    let access_token = getState().session.access_token;
    let options = {
      url: `${config.api_url}/items`,
      method: 'get',
      headers: {
        'Authorization': `Token token=${access_token}`,
      }
    }

    return axios.request(options)
      .then((response) => {
        dispatch(fetchItemsSuccess(response));
      })
      .catch((error) => {
        console.log(error)
        dispatch(fetchItemsError());
      });
  }
}

export default fetchItems;
