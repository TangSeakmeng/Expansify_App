import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../src/componenets/ExpenseListItem';
import expenses from '../fixtures/arr';

test('should expenseListItem with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot(); 
})
