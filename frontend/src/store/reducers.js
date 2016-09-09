import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import session from '../redux/reducers/session' 
import items from '../redux/reducers/items'
import modals from '../redux/reducers/modals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    session,
    items,
    modals,
    ...asyncReducers
  });
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer;
