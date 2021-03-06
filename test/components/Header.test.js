import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import { Header } from '../../src/componenets/Header';

test('should render header correctly using shallow', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expansify App');
})

test('should render header correctly using ReactShallowRenderer', () => {
    const render = new ReactShallowRenderer();
    render.render(<Header/>);
    expect(render.getRenderOutput()).toMatchSnapshot();
})

test('should call startLogout on button click', () => {
    var startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})