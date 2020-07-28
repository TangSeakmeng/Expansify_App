import React from 'react';

import ExpenseList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;