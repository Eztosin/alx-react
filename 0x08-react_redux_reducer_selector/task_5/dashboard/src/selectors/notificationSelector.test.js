import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from '../notificationSelector';

// Sample state for testing
const initialState = Map({
  notifications: fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'default', value: 'New data available' },
    },
  }),
});

describe('Notification Selectors', () => {
  it('should return the filter type selected', () => {
    const selectedFilter = filterTypeSelected(initialState);
    expect(selectedFilter).toBe('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.size).toBe(3);
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.size).toBe(2);
    expect(unreadNotifications.getIn([1, 'isRead'])).toBe(false);
    expect(unreadNotifications.getIn([3, 'isRead'])).toBe(false);
  });
});
