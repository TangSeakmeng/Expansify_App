import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenses_total from '../selectors/expenses-total';
import selectorExpenses from '../selectors/expenses';

const ExpenseSummary = (props) => {
    const expenseWord = props.expenses.length <= 1 ? 'expense' : 'expenses';

    return (    
        <div>
            <p>Viewing {props.expenses.length} {expenseWord} totalling { numeral(expenses_total(props.expenses)).format('$0,0.00') }</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);