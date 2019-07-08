import React from 'react';
import { shallow } from 'enzyme';
import MinioFile from './minio-file';

describe('<MinioFile />', () => {
  test('renders', () => {
    const wrapper = shallow(<MinioFile />);
    expect(wrapper).toMatchSnapshot();
  });
});
