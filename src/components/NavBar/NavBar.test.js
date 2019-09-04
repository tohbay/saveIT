import React from "react";
import NavBar from './index';

test("NavBar snapshot test", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
