import * as axios from 'axios';
import config from '../../../config';

const createItemSuccess = (response) => ({
  id: 'createItem',
  type: 'CREATE_ITEM_SUCCESS',
  item: response.data.item 
});

const createItemError = (response) => ({
  id: 'createItem',
  type: 'CREATE_ITEM_ERROR',
  message: response.data.message
});

const createItem = ({name, photoUrl}) => {
  return (dispatch, getState) => {
    const apiState = getState().api['createItem'] || {};
    if (apiState.fetching) return; 

    dispatch({
      id: 'createItem',
      type: 'CREATE_ITEM_FETCHING'
    });

    let access_token = getState().session.access_token;
    let options = {
      url: `${config.api_url}/items`,
      method: 'post',
      headers: {
        'Authorization': `Token token=${access_token}`,
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
        dispatch(fetchItemsSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchItemsError(error.response));
      });
  }
}

export default createItem;
