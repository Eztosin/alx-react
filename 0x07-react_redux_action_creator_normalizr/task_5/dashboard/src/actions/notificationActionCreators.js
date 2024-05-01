import * as types from './notificationActionTypes';

export function markAsRead(index) {
  return { type: types.MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: types.SET_TYPE_FILTER, filter };
}
