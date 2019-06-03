import { shallow } from "enzyme";
import * as React from "react";

import { NavLink } from "react-router-dom";
import { INamespaceState } from "../../reducers/namespace";
import Header from "./Header";

const defaultProps = {
  authenticated: true,
  fetchNamespaces: jest.fn(),
  logout: jest.fn(),
  namespace: {
    current: "default",
    namespaces: ["default"],
  } as INamespaceState,
  pathname: "",
  push: jest.fn(),
  setNamespace: jest.fn(),
  hideLogoutLink: false,
};
it("renders the header links and titles", () => {
  const wrapper = shallow(<Header {...defaultProps} />);
  const menubar = wrapper.find(".header__nav__menu").first();
  const items = menubar.children().map(p => p.props().children.props);
  const expectedItems = [{ children: "My Applications", to: "/apps" }];
  items.forEach((item, index) => {
    expect(item.children).toBe(expectedItems[index].children);
    expect(item.to).toBe(expectedItems[index].to);
  });
});

it("disables the logout link when hideLogoutLink is set", () => {
  const wrapper = shallow(<Header {...defaultProps} hideLogoutLink={true} />);
  const links = wrapper.find(NavLink);
  expect(links.length).toBeGreaterThan(1);
  links.children().forEach(link => {
    expect(link.text).not.toContain("Logout");
  });
});
