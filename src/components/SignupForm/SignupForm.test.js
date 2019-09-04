import React from 'react';
import SignupForm from './index';

test('SignupForm snapshot test', () => {
  const wrapper = shallow(<SignupForm />);
  expect(wrapper).toMatchSnapshot();
});
