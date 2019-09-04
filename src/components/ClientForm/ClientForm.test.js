import React from "react";
import ClientForm from './index';

test("ClientForm snapshot test", () => {
  const wrapper = shallow(<ClientForm />);
  expect(wrapper).toMatchSnapshot();
});
