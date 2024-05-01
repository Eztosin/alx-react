import * as actions from './notificationActionCreators';
import * as types from './notificationActionTypes';

test('markAsRead action creator', () => {
  const index = 1;
  const expectedAction = { type: types.MARK_AS_READ, index };
  expect(actions.markAsRead(index)).toEqual(expectedAction);
});

test('setNotificationFilter action creator', () => {
  const filter = types.NotificationTypeFilters.DEFAULT;
  const expectedAction = { type: types.SET_TYPE_FILTER, filter };
  expect(actions.setNotificationFilter(filter)).toEqual(expectedAction);
});
