import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("submit button should be disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.prop("disabled")).toEqual(true);
  });

  it("submit button should be enabled after changing input values", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("input[name='email']");
    const passwordInput = wrapper.find("input[name='password']");
    const submitButton = wrapper.find("input[type='submit']");

    // Simulate input change events
    emailInput.simulate("change", { target: { value: "test@example.com" } });
    passwordInput.simulate("change", { target: { value: "password123" } });

    expect(submitButton.prop("disabled")).toEqual(false);
  });

  it("submit button should be disabled if one input field is empty", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("input[name='email']");
    const passwordInput = wrapper.find("input[name='password']");
    const submitButton = wrapper.find("input[type='submit']");

    // Simulate input change events with one empty value
    emailInput.simulate("change", { target: { value: "" } });
    passwordInput.simulate("change", { target: { value: "password123" } });

    expect(submitButton.prop("disabled")).toEqual(true);
  });
});
