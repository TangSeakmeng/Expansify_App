import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../src/componenets/EditExpense';
import expenses from '../fixtures/arr';

let startEditExpense, startRemoveExpenses, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpenses={startRemoveExpenses} history={history} expense={expenses[0]} />);
});

test('should render EditExpensePage Correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})

test('should handle on removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({ id: expenses[0].id });
})
