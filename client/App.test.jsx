import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LandingMenu from './LandingMenu';

describe('<App />', () => {
  test('has a menu', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(LandingMenu).length).toBe(1);
  });

  test('has a memorization input form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(LandingMenu).length).toBe(1);
  });
});
