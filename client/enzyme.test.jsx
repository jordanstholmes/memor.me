// test file
import React from 'react';
import { shallow } from 'enzyme';

const wrapper = shallow(<div>sample test</div>);
test('enzyme works!', () => {
  expect(wrapper.text()).toBe('sample test');
});
