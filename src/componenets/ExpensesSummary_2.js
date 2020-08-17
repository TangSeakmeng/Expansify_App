// import React from 'react';
// import { connect } from 'react-redux';
// import numeral from 'numeral';
// import expenses_total from '../selectors/expenses-total';
// import selectorExpenses from '../selectors/expenses';

// const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
//     const expenseWord = expenseCount <= 1 ? 'expense' : 'expenses';
//     const total = numeral(expenseTotal).format('$0,0.00')

//     return (    
//         <div>
//             <h1>Viewing {expenseCount} {expenseWord} totalling {total}</h1>
//         </div>
//     )
// };

// const mapStateToProps = (state) => {
//     const visibleExpenses = selectorExpenses(state.expenses, state.filters);

//     return {
//         expenseCount: visibleExpenses.length,
//         expenseTotal: expenses_total(visibleExpenses)
//     };
// };

// export default connect(mapStateToProps)(ExpenseSummary);

// ----------------------------------------------------------------------------------------

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__action">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
