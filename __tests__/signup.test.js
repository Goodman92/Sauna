import React from 'react';
import renderer from 'react-test-renderer';

import SignupScreen from '../src/screens/signup/signup';


it('renders screen', () => {
  const tree = renderer.create(<SignupScreen/>).toJSON();

  expect(tree).toMatchSnapshot();
});



