import React from "react";
import { shallow } from "enzyme";
import { ClientPage as CreateAccountContainer, mapStateToProps } from "./index";

jest.mock("react-notify-toast");

describe("CreateAccount container", () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    createAccount: jest.fn(),
    loading: false,
  };

  const event = {
    target: {
      name: "name",
      value: "frank",
    },
  };

  it("calls input handler", () => {
    const wrapper = shallow(<CreateAccountContainer {...props} />);
    const instance = wrapper.instance();

    instance.handleChange(event);
    expect(instance.state.name).toEqual("frank");
  });

  it("display confirmation dialog", () => {
    const wrapper = shallow(<CreateAccountContainer {...props} />);
    const instance = wrapper.instance();
    instance.showConfirmDialog();
    expect(instance.state.createAccountDialog).toEqual(true);
  });

  it("hide confirmation dialog", () => {
    const wrapper = shallow(<CreateAccountContainer {...props} />);
    const instance = wrapper.instance();
    instance.hideConfirmDialog();
    expect(instance.state.createAccountDialog).toEqual(false);
  });

  it("signout test", () => {
    const wrapper = shallow(<CreateAccountContainer {...props} />);
    const instance = wrapper.instance();
    instance.onSignout();
    expect(localStorage.getItem("email")).toEqual(null);
  });

  it("create account test", () => {
    const wrapper = shallow(<CreateAccountContainer {...props} />);
    const instance = wrapper.instance();
    instance.createAccount(event);
    expect(instance.props.createAccount).toHaveBeenCalled();
  });

  it("test mapStateToProps", () => {
    const state = {
      parcels: {
        createAccountLoading: false,
      },
    };
    expect(mapStateToProps(state)).toEqual({ loading: false });
  });
});
