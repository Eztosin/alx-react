/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Footer tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Footer />);
    expect(component).toBeDefined();
  });

  it("renders the text correctly", () => {
    const component = shallow(<Footer />);
    expect(component.text()).toContain("Copyright");
  });
});
