import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenses_total from '../selectors/expenses-total';
import selectorExpenses from '../selectors/expenses';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount <= 1 ? 'expense' : 'expenses';
    const total = numeral(expenseTotal).format('$0,0.00')

    return (    
        <div>
            <p>Viewing {expenseCount} {expenseWord} totalling {total}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    const expenses = selectorExpenses(state.expenses, state.filters);

    return {
        expenseCount: expenses.length,
        expenseTotal: expenses_total(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);