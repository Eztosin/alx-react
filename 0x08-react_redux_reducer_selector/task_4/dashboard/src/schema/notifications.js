import { schema, normalize } from 'normalizr';
import * as notificationsData from '../notifications.json';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages');
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

export function notificationsNormalizer(data) {
  return normalize(data, [notificationSchema]);
}

const normalizedData = notificationsNormalizer(notificationsData.default);

export default normalizedData;
