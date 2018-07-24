import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../src/screens/login/login';


it('renders screen', () => {
  const tree = renderer.create(<LoginScreen/>).toJSON();

  expect(tree).toMatchSnapshot();
});


