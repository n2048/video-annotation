import React from 'react';
import { shallow } from 'enzyme';
import VideoList from './video-list';

describe('<VideoList />', () => {
  test('renders', () => {
    const wrapper = shallow(<VideoList />);
    expect(wrapper).toMatchSnapshot();
  });
});
