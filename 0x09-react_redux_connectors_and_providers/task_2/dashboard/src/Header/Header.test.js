/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Header />);
    expect(component).toBeDefined();
  });

  it("renders the title correctly", () => {
    const component = shallow(<Header />);
    expect(component.text()).toContain("School dashboard");
  });
});
