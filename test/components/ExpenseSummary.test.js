import React from 'React';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../src/componenets/ExpensesSummary_2'; 
import expenses from '../fixtures/arr';
import Expense_Total from '../../src/selectors/expenses-total';

test('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with mulitiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expenseTotal={Expense_Total(expenses)} />);
    expect(wrapper).toMatchSnapshot();
})
