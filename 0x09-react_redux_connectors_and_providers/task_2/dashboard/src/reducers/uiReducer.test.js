import uiReducer from './uiReducer';
import { Map } from 'immutable';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = { email: 'user@example.com', name: 'User' };
    const state = uiReducer(undefined, {
      type: LOGIN_SUCCESS,
      user,
    });
    expect(state.get('isUserLoggedIn')).toBe(true);
    expect(state.get('user')).toEqual(user);
  });

  it('should handle LOGOUT', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'user@example.com', name: 'User' },
    });
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toBe(null);
  });
});
