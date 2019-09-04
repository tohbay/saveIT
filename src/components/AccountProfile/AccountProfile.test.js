import React from "react";
import AccountProfile from './AccountProfile';

test("AccountProfile snapshot test", () => {
  const wrapper = shallow(<AccountProfile />);
  expect(wrapper).toMatchSnapshot();
});
