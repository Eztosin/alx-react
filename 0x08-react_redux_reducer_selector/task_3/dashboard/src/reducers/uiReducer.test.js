import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })
    ).toEqual(initialState.set('isNotificationDrawerVisible', true));
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER })
    ).toEqual(initialState.set('isNotificationDrawerVisible', false));
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = { email: 'test@example.com', password: 'password' };
    const action = { type: LOGIN_SUCCESS, user };
    expect(uiReducer(initialState, action)).toEqual(
      initialState
        .set('isUserLoggedIn', true)
        .set('user', Map(user))
    );
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(uiReducer(initialState, { type: LOGIN_FAILURE })).toEqual(
      initialState.set('isUserLoggedIn', false)
    );
  });

  it('should handle LOGOUT', () => {
    expect(uiReducer(initialState, { type: LOGOUT })).toEqual(
      initialState.set('isUserLoggedIn', false)
    );
  });
});
