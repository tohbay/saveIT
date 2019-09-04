import React from "react";
import { mapStateToProps, SignupPage as RegisterContainer } from "./index";

jest.mock("react-notify-toast");

describe("Register container", () => {
  const props = {
    register: jest.fn(),
    loading: false,
    history: {
      push: jest.fn(),
    },
  };

  const event = {
    target: {
      name: "frank",
    },
  };

  it("test mapStateToProps", () => {
    const state = {
      auth: {
        loading: false,
      },
    };
    expect(mapStateToProps(state)).toEqual({ loading: false });
  });

  it("calls input handler", () => {
    const wrapper = shallow(<RegisterContainer />);
    const instance = wrapper.instance();
    instance.onChange(event);
  });

  it("tests registering", () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();

    event.preventDefault = jest.fn();
    instance.setState({
      firstname: "frank",
      lastname: "frank",
      email: "frank@frank.com",
      password: "john123",
      confirmPassword: "john123",
    });
    instance.onRegister(event);
  });

  it("tests registering with empty field", () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();
    event.preventDefault = jest.fn();
    instance.setState({
      firstname: "frank",
      lastname: "frank",
      email: "frank@frank.com",
      password: "john123",
      confirmPassword: "john123",
    });
    instance.onRegister(event);
  });

  it("tests registering success", () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    const instance = wrapper.instance();
    event.preventDefault = jest.fn();
    instance.setState({
      firstname: "frank",
      lastname: "frank",
      email: "frank@frank.com",
      password: "john123",
      confirmPassword: "john123",
    });
    instance.onRegister(event);
  });

  it("test componentDidMount", () => {
    const wrapper = shallow(<RegisterContainer {...props} />);
    localStorage.setItem("user_token", "dasdfisfiwetuwerends");
    wrapper.instance().UNSAFE_componentDidMount();
  });
});
