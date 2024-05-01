import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages');
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

const normalizedData = normalize(notificationsData.default, [notificationSchema]);

export default function getAllNotificationsByUser(userId) {
  const { notifications } = normalizedData.entities;

  return Object.values(notifications).filter(notification => notification.author === userId);
}
