import React from "react";
import { LoginPage as LoginContainer } from "./index";

jest.mock("react-notify-toast");

describe("Login container", () => {
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: "frank",
      value: "frank@frank.com",
    },
  };
  const props = {
    loading: false,
    login: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };
  it("calls input handler", () => {
    const wrapper = shallow(<LoginContainer />);
    const emailField = wrapper.find("input#email");

    expect(emailField).toBeTruthy();
  });

  it("calls submit handler", () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.onLogin(event);
    expect(instance.onLogin(event)).toEqual(undefined);
  });

  it("calls submit handler with no password", () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.setState({
      email: "frank@frank.com",
      password: "",
    });
    expect(instance.onLogin(event)).toEqual(undefined);
  });

  it("calls submit handler", () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.setState({
      email: "frank@frank.com",
      password: "john123",
    });
    instance.onLogin(event);
    expect(instance.props.login).toHaveBeenCalled();
  });

  it("test componentDidMount", () => {
    const wrapper = shallow(<LoginContainer {...props} />);
    localStorage.setItem("user_token", "dasdfisfiwetuwerends");
    const instance = wrapper.instance();
    instance.UNSAFE_componentDidMount();
    expect(instance.state.redirect).toEqual(true);
  });
});
