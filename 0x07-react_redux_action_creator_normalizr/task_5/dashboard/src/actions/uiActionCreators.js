import * as types from './uiActionTypes';

export function login(email, password) {
  return { type: types.LOGIN, user: { email, password } };
}

export function logout() {
  return { type: types.LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: types.DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: types.HIDE_NOTIFICATION_DRAWER };
}
