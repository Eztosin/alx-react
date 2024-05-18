import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { loginRequest, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN_SUCCESS action if login API call is successful', async () => {
    fetchMock.getOnce('/login-success.json', { user: 'testUser' });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates LOGIN_FAILURE action if login API call fails', async () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
