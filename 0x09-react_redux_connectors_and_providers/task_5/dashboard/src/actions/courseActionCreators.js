import { bindActionCreators } from 'redux';
import * as courseActions from './courseActionTypes';

export function bindCourseActionCreators(dispatch) {
  return bindActionCreators(courseActions, dispatch);
}
