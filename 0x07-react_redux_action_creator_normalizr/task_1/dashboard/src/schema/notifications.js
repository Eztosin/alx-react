import { normalize, schema } from 'normalizr';
import notificationsData from '../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

const { entities } = normalizedData;

export default function getAllNotificationsByUser(userId) {
  return entities.notifications ? Object.values(entities.notifications).filter(
    notification => notification.author.id === userId
  ) : [];
}
