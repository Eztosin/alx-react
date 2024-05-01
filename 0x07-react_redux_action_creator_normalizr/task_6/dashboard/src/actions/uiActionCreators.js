import { bindActionCreators } from 'redux';
import * as uiActions from './uiActionTypes';

export function bindUiActionCreators(dispatch) {
  return bindActionCreators(uiActions, dispatch);
}
