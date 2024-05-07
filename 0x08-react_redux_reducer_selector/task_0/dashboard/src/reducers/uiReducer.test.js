import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('UI Reducer', () => {
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        });
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(undefined, { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER }))
            .toEqual({ isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} });
    });

});
