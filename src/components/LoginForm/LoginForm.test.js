import React from 'react';
import LoginForm from './index';

test('LoginForm snapshot test', () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper).toMatchSnapshot();
});
