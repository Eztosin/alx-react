import { getAllNotificationsByUser } from './notifications';

test('getAllNotificationsByUser returns correct data for user with id 5debd764a7c57c7839d722e9', () => {
  const userId = '5debd764a7c57c7839d722e9';
  const expectedNotificationIds = [
    '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
    '280913fe-38dd-4abd-8ab6-acdb4105f922',
  ];

  const notifications = getAllNotificationsByUser(userId);

  const notificationIds = notifications.map(notification => notification.id);

  expect(notificationIds).toEqual(expect.arrayContaining(expectedNotificationIds));
});
