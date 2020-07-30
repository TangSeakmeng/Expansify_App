import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary2 from './ExpensesSummary_2';


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary2 />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;