import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../src/componenets/AddExpense';
import expenses from '../fixtures/arr';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage Correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})
