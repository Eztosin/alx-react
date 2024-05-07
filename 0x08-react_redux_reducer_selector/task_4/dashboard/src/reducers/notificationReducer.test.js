import { fromJS } from 'immutable';
import notificationReducer from '../notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../../actions/notificationActionTypes';
import { notificationsNormalizer } from '../../schema/notifications';

// Sample normalized data for testing
const normalizedData = {
  entities: {
    notifications: {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    },
  },
  result: [1, 2],
};

// Initial state for testing
const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: normalizedData.entities.notifications,
});

describe('Notification Reducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: normalizedData.result };
    const expectedState = fromJS(normalizedData);

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = initialState.setIn(['notifications', '2', 'isRead'], true);

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = initialState.set('filter', 'URGENT');

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
