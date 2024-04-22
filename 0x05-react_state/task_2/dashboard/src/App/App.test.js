/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
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

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  
  // Other tests remain the same
  
  it("should render Login Component", () => {
    const component = shallow(<App />);
    const loginComponent = component.find(Login);

    expect(loginComponent.exists()).toBe(true);
  });

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    const footerComponent = component.find(Footer);

    expect(footerComponent.exists()).toBe(true);
  });

  it("logIn function updates state correctly", () => {
    const component = shallow(<App />);
    const email = "test@example.com";
    const password = "password";

    component.instance().logIn(email, password);

    const userState = component.state().user;

    expect(userState.email).toBe(email);
    expect(userState.password).toBe(password);
    expect(userState.isLoggedIn).toBe(true);
  });

  it("logOut function updates state correctly", () => {
    const component = shallow(<App />);
    component.setState({ user: { email: "test@example.com", password: "password", isLoggedIn: true } });

    component.instance().logOut();

    const userState = component.state().user;

    expect(userState.email).toBe("");
    expect(userState.password).toBe("");
    expect(userState.isLoggedIn).toBe(false);
  });
});
