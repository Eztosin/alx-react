/**
 * @jest-environment jsdom
 */
import React from "react";
import App, { mapStateToProps } from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("mapStateToProps tests", () => {
  it("returns the correct object when user is logged in", () => {
    const state = {
      uiReducer: {
        isUserLoggedIn: true,
      },
    };

    const props = mapStateToProps(state);

    expect(props.isLoggedIn).toBe(true);
  });
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("default state for displayDrawer is false", () => {
    const component = shallow(<App />);
    const initialState = component.state().displayDrawer;

    expect(initialState).toBe(false);
  });

  it("handleDisplayDrawer sets state to true", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();

    const updatedState = component.state().displayDrawer;

    expect(updatedState).toBe(true);
  });

  it("handleHideDrawer sets state to false", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    component.instance().handleHideDrawer();

    const updatedState = component.state().displayDrawer;

    expect(updatedState).toBe(false);
  });
});
