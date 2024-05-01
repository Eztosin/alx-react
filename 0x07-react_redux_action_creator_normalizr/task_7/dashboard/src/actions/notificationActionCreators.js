import { bindActionCreators } from 'redux';
import * as notificationActions from './notificationActionTypes';

export function bindNotificationActionCreators(dispatch) {
  return bindActionCreators(notificationActions, dispatch);
}
