/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Map } from "immutable";
import App, { mapStateToProps } from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

const mockStore = configureStore([]);
const initialState = {
  uiReducer: Map({
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
  }),
};

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("mapStateToProps tests", () => {
  it("returns the correct object when user is logged in", () => {
    const state = {
      uiReducer: Map({
        isUserLoggedIn: true,
      }),
    };

    const props = mapStateToProps(state);

    expect(props.isLoggedIn).toBe(true);
  });
});

describe("App tests", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("renders without crashing", () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(Notifications).length).toBe(1);
  });

  it("should render Header component", () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(Header).length).toBe(1);
  });

  it("should render Login Component", () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(Login).length).toBe(1);
  });

  it("should render Footer Component", () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(Footer).length).toBe(1);
  });

  it("does not render courselist if logged out", () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(CourseList).length).toBe(0);
  });

  it("renders courselist if logged in", () => {
    const loggedInState = {
      uiReducer: Map({
        isUserLoggedIn: true,
      }),
    };
    store = mockStore(loggedInState);

    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component.find(CourseList).length).toBe(1);
    expect(component.find(Login).length).toBe(0);
  });
});
