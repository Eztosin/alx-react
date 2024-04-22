import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";
import { AppContext } from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1 and img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("should not render logoutSection with default context value", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists("#logoutSection")).toEqual(false);
  });

  it("should render logoutSection with user defined context value", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists("#logoutSection")).toEqual(true);
  });

  it("should call logOut function when logoutSection is clicked", () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("#logoutSection").simulate("click");
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
