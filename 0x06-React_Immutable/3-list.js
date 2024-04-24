import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, strng) {
  return list.push(strng);
}
