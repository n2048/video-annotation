import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './main-content';

describe('<MainContent />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
