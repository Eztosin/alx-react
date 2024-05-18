import { Map, fromJS } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

const initialState = Map({
  isLoading: false,
  notifications: fromJS([]),
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('isLoading', action.isLoading);
      
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', fromJS(action.notifications));

    default:
      return state;
  }
};

export default notificationReducer;
