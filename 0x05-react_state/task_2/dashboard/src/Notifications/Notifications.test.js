import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Notifications component", () => {
  it("clicking on menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("clicking on button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("renders correctly with default props", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correctly with specified props", () => {
    const listNotifications = [{ id: 1, type: "default", value: "Test notification" }];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find("li").length).toBe(1);
  });
});
