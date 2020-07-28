import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configure';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 123.5, createdAt: 1595307600000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3.5, createdAt: 1595307600000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 3123.5, createdAt: 1595307600000 }));

// store.dispatch(setTextFilter({ text: 'bill' }));
// store.dispatch(sortByAmount());

// setTimeout(() => {
//     store.dispatch(setTextFilter({ text: 'Gas' }));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
