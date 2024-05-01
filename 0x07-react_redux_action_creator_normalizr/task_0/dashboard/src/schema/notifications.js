import * as notificationsData from '../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId);
}
