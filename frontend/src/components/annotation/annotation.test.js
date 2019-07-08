import React from 'react';
import { shallow } from 'enzyme';
import Annotation from './annotation';

describe('<Annotation />', () => {
  test('renders', () => {
    const wrapper = shallow(<Annotation />);
    expect(wrapper).toMatchSnapshot();
  });
});
