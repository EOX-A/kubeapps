import { shallow } from "enzyme";
import { Location } from "history";
import * as React from "react";
import { IAuthState } from "reducers/auth";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import BYOCView from "./BYOCViewContainer";

const mockStore = configureMockStore([thunk]);

const makeStore = (
  sessionExpired: boolean,
  authenticated: boolean,
  authenticating: boolean,
  oidcAuthenticated: boolean,
  authenticationError: string,
) => {
  const state: IAuthState = {
    sessionExpired,
    authenticated,
    authenticating,
    oidcAuthenticated,
    authenticationError,
  };
  return mockStore({ auth: state });
};

const emptyLocation: Location = {
  hash: "",
  pathname: "",
  search: "",
  state: "",
};

describe("BYOCViewContainer props", () => {
  it("maps authentication redux states to props", () => {
    const store = makeStore(true, true, true, true, "It's a trap");
    const wrapper = shallow(<BYOCView store={store} location={emptyLocation} />);
    const form = wrapper.find("BYOCView");
    expect(form).toHaveProp({
      authenticated: true,
      authenticating: true,
      authenticationError: "It's a trap",
    });
  });
});
