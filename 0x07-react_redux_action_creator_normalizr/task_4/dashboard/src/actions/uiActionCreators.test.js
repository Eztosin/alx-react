import * as actions from './uiActionCreators';
import * as types from './uiActionTypes';

test('login action creator', () => {
  const email = 'test@example.com';
  const password = 'password123';
  const expectedAction = {
    type: types.LOGIN,
    user: { email, password }
  };
  expect(actions.login(email, password)).toEqual(expectedAction);
});

test('logout action creator', () => {
  const expectedAction = { type: types.LOGOUT };
  expect(actions.logout()).toEqual(expectedAction);
});

test('displayNotificationDrawer action creator', () => {
  const expectedAction = { type: types.DISPLAY_NOTIFICATION_DRAWER };
  expect(actions.displayNotificationDrawer()).toEqual(expectedAction);
});

test('hideNotificationDrawer action creator', () => {
  const expectedAction = { type: types.HIDE_NOTIFICATION_DRAWER };
  expect(actions.hideNotificationDrawer()).toEqual(expectedAction);
});
