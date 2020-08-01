import React from 'react';
import { shallow } from 'enzyme';
import { LogInPage } from '../../src/componenets/LogInPage';

test('should render loginpage correctly', () => {
    const wrapper = shallow(<LogInPage />);
    expect(wrapper).toMatchSnapshot();
});