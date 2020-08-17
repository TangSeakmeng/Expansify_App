import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import ExpenseDashboardPage from '../componenets/Dashboard';
import AddExpensePage from '../componenets/AddExpense';
import EditExpensePage from '../componenets/EditExpense';
import HelpPage from '../componenets/Help';
import NotFoundPage from '../componenets/404NotFound';
import Header from '../componenets/Header';
import LoginPage from '../componenets/LogInPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/login" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;